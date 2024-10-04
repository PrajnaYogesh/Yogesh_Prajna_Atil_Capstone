const express = require('express');
const app = express();
require('dotenv').config();
const PORT=process.env.PORT;
const connectToDB = require('./config/connectToDB')
connectToDB();

//to access json in body
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello there')
})




app.listen(PORT,()=>{
    console.log("Listening to port");
   
})


