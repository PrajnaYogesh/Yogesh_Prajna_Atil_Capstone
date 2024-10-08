const Cart = require('../models/cart');
const { v4: uuidv4 } = require('uuid');

const createANewCart = async(req,res) =>{
    try {
        console.log("one")
        const newCart =  new Cart({ cartId: uuidv4(), items: [] });
        console.log("two")
        console.log(newCart)
        await newCart.save();
        res.status(201).send(newCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//see if you can send items in the body here from front end
const addItemToCart = async(req,res)=>{
    try {
        const { cartId } = req.params;
        console.log('cart id is')
        console.log(cartId)
        const { itemName, quantity, pricePerItem } = req.body;
        console.log('items received from front')
console.log(req.body)

// Parse pricePerItem to a number
const parsedPrice = parseFloat(pricePerItem.replace(/[^0-9.-]+/g, ''));

        const cart = await Cart.findOne({ cartId });
        console.log('based on cartid,cart found is')
        console.log(cart)
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        const existingItem = cart.items.find(item => item.itemName === itemName);
        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if item already exists
        } else {
            cart.items.push({ itemName, quantity, pricePerItem:parsedPrice });
        }

        // cart.items.push({ itemName, quantity, pricePerItem });
        console.log('lets calculate total')
        cart.calculateTotalAmount(); // Update total amount
        console.log('TotalAmount',cart.totalAmount)
        await cart.save();
        console.log("the itemas and cart details",cart)
        // res.status(500).send(cart);
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
