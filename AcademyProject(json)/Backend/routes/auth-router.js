const express = require('express');
const path = require('path');
const router = express.Router();
const AuthController = require('../controllers/auth-controller');
const multer  = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads/'))
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/"); //  image/jpg, image/png, xml/svg
        let extension = extArray[extArray.length - 1];
        cb(null, `${req.body.email}_${Date.now()}.${extension}`)
    }
})
const upload = multer({ storage: storage });

router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.post('/login', AuthController.loginPost);
router.get('/register', AuthController.register);
router.post('/register', upload.single('avatar'), AuthController.registerPost);


module.exports = router;