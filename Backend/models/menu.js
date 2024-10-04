const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
       itemName : { type: String, required: true,unique: true },
    itemImage :{ publicId: String, url: String },
    itemDescription: { type: String, required: true },
    price : {type:Number, required:true},
    category: { type: String, required: true },
    type:{type: String, required: true }
},{timestamps:true});

const Menu  = mongoose.model("Menu",menuSchema)

module.exports = Menu;
