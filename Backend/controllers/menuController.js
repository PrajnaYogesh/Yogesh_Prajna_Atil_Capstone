const Menu = require('../models/menu')
// const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudinaryConfig');
const {success,error} = require('../utils/responseWrapper')


cloudinary.api.ping()
    .then((result) => {
        console.log('Cloudinary connection successful:', result);
    })
    .catch((error) => {
        console.error('Error connecting to Cloudinary:', error);
    });



    // =================Create a item=================
const createAnItemController = async( req,res) =>{
   
     try{
        //   const owner = req._id;
       
        const {itemName,itemDescription,price,category,type} =req.body;
const itemImage=req.file;
        if(!itemName|| !itemDescription || !price || !category || !type){
            return res.send(error(400,"All fields in the recipe are required!!"));
        }
        // const cloudImg = await cloudinary.uploader.upload(itemImage.path,{
        //     folder:"menuItems"
        // })
        const cloudImg = await cloudinary.uploader.upload(itemImage.path);
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
     console.log("Item created")
     return res.status(200).send(menu);
     }
    catch (error) {
        return res.status(500).send(error)
   }
}


 // =================Edit a item=================
const editAnMenuItemController = async(req,res)=>{
try {
    const {_id,itemName,itemDescription,price,category,type} =req.body;
    const itemImage=req.file;
console.log("here")
console.log(req.body);
    const item = await Menu.findById(_id);
console.log("item from backend is ")
console.log(item)
    if(!item){
        return res.send(error(404,"Item not found!"));
    }
   
    const cloudImg = await cloudinary.uploader.upload(itemImage.path);

item.itemName = itemName;
item.itemDescription=itemDescription;
item.price =price;
item.category=category;
item.type=type;
item.itemImage ={
              url:cloudImg.secure_url,
              publicId:cloudImg.public_id
          }

          await item.save();
          return res.send(success(200, {item}));
} catch (e) {
    console.log("edit error");
    
    return res.send(error(500, e.message));
  }

}

 // =================Delete an item=================
const deleteAnMenuItemController = async(req,res)=>{
  try {
    console.log(req.params)
    const {id} = req.params;

    const item = await Menu.findById(id);
    // console.log('item is')
    // console.log(item);
    
    if(!item){
        return res.send(error(404, "Item not found!"));
    }
    const deleteResult = await Menu.deleteOne({_id:id});
    // console.log('Delete result:', deleteResult);
   return res.send(success(200, "Item deleted successfully!"));
    
  } catch  (e) {
    return res.send(error(500, e.message));
  }
}




 // =================get an item=================
const getAnMenuItemController = async(req,res)=>{
    try {
        const {id} = req.params;
        const item = await Menu.findById(id);
        if(!item){
            return res.send(error(404, "Item not found!"));
        }
        return res.send(success(200, item));

    } catch (e) {
        return res.send(error(500, e.message));
    }
}


  // =================get all items=================
const getAllItemsController= async(req,res)=>{
    try {
               const items = await Menu.find();
            //    console.log("here")
        if(!items){
            return res.send(error(404, "Item not found!"));
        }
        return res.send(success(200, items));

    } catch (e) {
        return res.send(error(500, e.message));
    }
}


module.exports= {
    createAnItemController,editAnMenuItemController,deleteAnMenuItemController,getAnMenuItemController,getAllItemsController
}