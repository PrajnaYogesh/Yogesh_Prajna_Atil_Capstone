const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const {success,error} = require('../utils/responseWrapper')



// Signup
const signupController = async(req,res) =>{

    try {
       
        const {name,email,password} = req.body;
        if(!name || !email || !password ){
            return res.send(error(400,"Please enter all the required details"));
        }
        const oldAdmin = await Admin.findOne({email});
        if(oldAdmin){
            return res.send(error(409,"Admin with this email already registered, try using another email"));
        }
                  const hashedPassword = await bcrypt.hash(password,10);
              const admin = await Admin.create({name,email,password:hashedPassword});
        const newAdmin = await Admin.findById(admin._id);
        // return res.status(201).json({
        //     admin: {
        //         id: admin._id,
        //         name: admin.name,
        //         email: admin.email
        //     }
        // })

        return res.send(success(201, 'Admin created successfully'))


    } catch (e) {
        console.error('Something went wrong!', error);
        return res.send(error(500,e.message))
    }
}



//Login 
const loginController = async(req,res) =>{
    try {
        const {email,password} = req.body;
if(!email || !password){
     return res.send(error(400,"Please enter Email and Password"))
}

const admin = await Admin.findOne({email}).select('+password') //get the password stored in db for that admin
 if(!admin){
     return res.send(error(404,"Admin is not registered! Click the link below to Signup"));
 }

 const matched = await bcrypt.compare(password, admin.password);
 if(!matched){
    return res.send(error(403,'Password is incorrect'));
 }

// generating Access Token, call generateAccessToken method
const accessToken = generateAccessToken({
    _id: admin._id
})

//generate refresh token ,cookie parser,jwt later


//  return res.send(success(200,'Login successfull'))
return res.send(success(200,{accessToken}))

 

    }  catch (e) {
        return res.send(error(500,e.message))
      }
}




// Generate the access token
const generateAccessToken = (data) =>{
    try {
        const token = jwt.sign(data , process.env.ACCESS_TOKEN_PRIVATE_KEY,{
            expiresIn: "4d",
        });
        return token;
    } catch (error) {
        console.log('there was error generating access token')
    }
}


const logoutController = async(req,res) =>{

}

module.exports = {signupController,loginController,logoutController}