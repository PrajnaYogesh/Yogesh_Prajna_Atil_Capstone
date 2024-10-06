// const Admin = require('../models/admin')


// module.exports = async(req,res,next) =>{



// }


//Important
//create generate refresh token and accesstoken in login controller. add private key in .env
//Add the middleware part later => need to do the jwt,accesstoken,refresh token.. 
// also need to call this in the menu route between path and controller



const jwt = require("jsonwebtoken")
const { error } = require("../utils/responseWrapper");
const Admin = require("../models/admin");


module.exports = async (req, res, next) => {

    if (
        !req.headers ||
        !req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer")
      ) {
        return res.send(error(401, "Authorization header is  required"));
      }


      const accessToken = req.headers.authorization.split(" ")[1] 

try {
    const decoded = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_PRIVATE_KEY
      );

      req._id = decoded._id;
      console.log(req._id);
      const admin = Admin.findById(req._id);
      if (!admin) {
        res.status(404).send("Admin not found!");
      }

      next();
} catch (error) {
    // console.log(error);
    return  res.status(400).send("Invalid access token or access token expired");
}


}