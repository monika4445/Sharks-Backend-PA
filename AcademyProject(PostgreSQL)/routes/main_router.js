const express = require('express');
const router = express.Router();

const MainController = require('../controllers/main-controller')

router.get("/books", MainController.getBooks);
router.get("/authors", MainController.getAuthors);
router.get("/images", MainController.getImages);
router.get("/videos", MainController.getVideos);
router.get("/comments", MainController.getComments);

module.exports = router;
