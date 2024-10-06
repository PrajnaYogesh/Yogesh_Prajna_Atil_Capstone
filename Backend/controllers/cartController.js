const Cart = require('../models/cart');
const { v4: uuidv4 } = require('uuid');

const createANewCart = async(req,res) =>{
    try {
        const newCart = new Cart({ cartId: uuidv4(), items: [] });
        await newCart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//see if you can send items in the body here from front end
const addItemToCart = async(req,res)=>{
    try {
        const { cartId } = req.params;
        const { itemName, quantity, pricePerItem } = req.body;

        const cart = await Cart.findOne({ cartId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        const existingItem = cart.items.find(item => item.itemName === itemName);
        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if item already exists
        } else {
            cart.items.push({ itemName, quantity, pricePerItem });
        }
        cart.calculateTotalAmount(); // Update total amount
        await cart.save();

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// get a cart =>i think its same as get all items for that cart,can use this  in modal
const getACart = async(req,res) =>{
    try {
        const cart = await Cart.findOne({ cartId: req.params.cartId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//on checkout clear that particular cart after payment
const checkoutCart = async(req,res) =>{
    try {
        const cart = await Cart.findOne({ cartId: req.params.cartId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        // Process the checkout (e.g., payment processing) here
//can add the code to payment gateway here
//in mycode can do the payment successful pop up

        // Clear the cart after checkout
        cart.items = [];
        cart.totalAmount = 0;
        await cart.save();

        res.json({ message: 'Checkout successful', cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {createANewCart,addItemToCart,getACart,checkoutCart}
