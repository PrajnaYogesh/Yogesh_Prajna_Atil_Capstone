const Admin = require('../models/admin')
const bcrypt = require('bcrypt')

const signupController = async(req,res) =>{

    try {
        console.log("one")
        const {name,email,password} = req.body;
        if(!name || !email || !password ){
            return res.status(400).send("Please enter all the required details");
        }
console.log("two")
        const oldAdmin = await Admin.findOne({email});
        if(oldAdmin){
            return res.status(409).send("Admin with this email already registered, try using another email");
        }
        console.log("three")

            const hashedPassword = await bcrypt.hash(password,10);
        console.log("four")
        const admin = await Admin.create({name,email,password:hashedPassword});
        const newAdmin = await Admin.findById(admin._id);
        return res.status(201).json({
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email
            }
        })


    } catch (error) {
        console.error('Something went wrong!', error);
        return res.status(500).send("Internal server error");
    }
}


const loginController = async(req,res) =>{
    try {
        const {email,password} = req.body;
if(!email || !password){
    return res.status(400).send("Please enter Email and Password")
}

const admin = await Admin.findOne({email}).select('+password') //get the password stored in db for that admin
 if(!admin){
    return res.status(404).send("Admin is not registered! Click the link below to Signup");
 }

 const matched = await bcrypt.compare(password, admin.password);
 if(!matched){
    return res.status(403).send('Password is incorrect');
 }

return res.status(200).send('Login successfull')

 //generate access token,refresh token ,cookie parser,jwt later

    } catch (error) {
        
    }
}



module.exports = {signupController,loginController}