const router = require('express').Router();
const cartController = require('../controllers/cartController')

//create an cart for each session
router.post('/carts',cartController.createANewCart);

//add items to the cart => see if you can send items in the body here from front end
router.post('/carts/:cartId/items',cartController.addItemToCart)

// Route to get a cart
router.get('/carts/:cartId',cartController.getACart)

//on checkout clear that particular cart after payment
router.post('/carts/:cartId/checkout',cartController.checkoutCart)


module.exports = router;