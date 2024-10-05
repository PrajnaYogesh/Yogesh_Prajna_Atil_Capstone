require('dotenv').config();
const mongoose = require('mongoose')

const connectToDB = async()=>{
    await mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology: true,
useNewUrlParser : true
    })
    console.log('connected to db');
    }

    module.exports = connectToDB;
