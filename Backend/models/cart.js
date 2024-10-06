const mongoose = require('mongoose');

// Define the CartItem schema
const CartItemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    pricePerItem: { type: Number, required: true }
});

// Define the Cart schema
const CartSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    items: [CartItemSchema],
    totalAmount: { type: Number, default: 0 }
});

// Method to calculate total amount
CartSchema.methods.calculateTotalAmount = function () {
    this.totalAmount = this.items.reduce((total, item) => {
        return total + (item.quantity * item.pricePerItem);
    }, 0);
};

// Create the Cart model
const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;

