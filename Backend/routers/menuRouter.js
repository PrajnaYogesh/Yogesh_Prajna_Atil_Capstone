const router = require('express').Router();
const menuController = require('../controllers/menuController')
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudinaryConfig');
const requireUser = require("../middleware/requireUser");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'menuItems', // Optional: Specify a folder name in Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg'], // Use 'allowed_formats' instead of 'allowedFormats'
    },
});


const upload = multer({ storage });

router.post('/create', requireUser,upload.single('itemImage'),menuController.createAnItemController);
router.put('/edit',requireUser,upload.single('itemImage'),menuController.editAnMenuItemController);
router.delete('/delete/:id',requireUser,menuController.deleteAnMenuItemController);
router.get('/:id',menuController.getAnMenuItemController)
router.get('/',menuController.getAllItemsController)



module.exports = router;