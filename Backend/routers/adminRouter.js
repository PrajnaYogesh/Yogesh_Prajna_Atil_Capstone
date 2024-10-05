const router = require('express').Router();
const adminController = require('../controllers/adminController')

router.post('/signup',adminController.signupController);
router.post('/login', adminController.loginController)


module.exports = router;