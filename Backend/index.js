const express = require('express');
const app = express();
require('dotenv').config();
const PORT=process.env.PORT;
const connectToDB = require('./config/connectToDB')
connectToDB();

const adminRoute = require('./routers/adminRoute')

//to access json in body and take in a limit for image
app.use(express.json({limit:"150mb"}))



//admin route - signup and login
app.use('/admin',adminRoute)


app.get('/',(req,res)=>{
    res.send('Hello there')
})






app.listen(PORT,()=>{
    console.log("Listening to port");
   
})


