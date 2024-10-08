const router = require('express').Router();
const adminController = require('../controllers/adminController')

router.post('/signup',adminController.signupController);
router.post('/login', adminController.loginController);
router.post('/logout',adminController.logoutController);

// create logout and refreshAccesstoken methods

module.exports = router;