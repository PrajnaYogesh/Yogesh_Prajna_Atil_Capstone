const Menu = require('../models/menu')
// const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudinaryConfig');

cloudinary.api.ping()
    .then((result) => {
        console.log('Cloudinary connection successful:', result);
    })
    .catch((error) => {
        console.error('Error connecting to Cloudinary:', error);
    });

const createAnItemController = async( req,res) =>{
   
     try{
        //  const owner = req._id;
        console.log("one");
        const {itemName,itemDescription,price,category,type} =req.body;
const itemImage=req.file;
console.log("two");

        if(!itemName|| !itemDescription || !price || !category || !type){
            return res.status(400).send("All fields in the recipe are required!!");
        }

        // const cloudImg = await cloudinary.uploader.upload(itemImage.path,{
        //     folder:"menuItems"
        // })
        const cloudImg = await cloudinary.uploader.upload(itemImage.path);
        console.log("three");
        
     const menu  = await Menu.create({
             itemName,
        itemDescription,
        price,
        category,
        type, 
        itemImage:{
            url:cloudImg.secure_url,
            publicId:cloudImg.public_id
        }
     })

     console.log("menu created")
     return res.status(200).send(menu);
     }
    catch (error) {
        return res.status(500).send(error)
   }
}



module.exports= {
    createAnItemController
}