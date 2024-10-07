const express = require('express');
const app = express();
// const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const PORT=process.env.PORT;
const connectToDB = require('./config/connectToDB')
connectToDB();
const adminRouter = require('./routers/adminRouter')
const menuRouter = require('./routers/menuRouter')
const cartRouter = require('./routers/cartRouter')
// const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const cors=require('cors')



// //Cloudinary configuration
// cloudinary.config({
//     cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });


// cloudinary.api.ping()
//     .then((result) => {
//         console.log('Cloudinary connection successful:', result);
//     })
//     .catch((error) => {
//         console.error('Error connecting to Cloudinary:', error);
//     });


// Middleware
//to access json in body and take in a limit for image
app.use(express.json({limit:"150mb"}))
// Middleware
// app.use(cors());

app.use(cors({
    origin:true,
    credentials: true
  }))

  
app.use(bodyParser.json());




// Routes

//admin route - signup and login
app.use('/admin',adminRouter)
app.use('/menu',menuRouter)
app.use('/cart',cartRouter)

// app.get('/',(req,res)=>{
//     res.send('Hello there')
// })


app.listen(PORT,()=>{
    console.log("Listening to port");
   
})


