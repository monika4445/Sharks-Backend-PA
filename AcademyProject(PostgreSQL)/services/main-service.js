const { Author, Book, Category, Video, Image, Comment } = require("../models");

class MainService {
    async getAllBooks(){
        return Book.findAll({
            include: { model: Author, as: 'authors'}
        });
    }
    async getAllImages(){
        return Image.findAll({
            include: { model: Comment }
        });
    }
    async getAllVideos(){
        return Video.findAll({
            include: { model: Comment }
        });
    }
    async getAllAuthors(){
        return Author.findAll({
            include: [
                { model: Category, required: false },
                { model: Book, required: true, as: 'books' },
            ]
        });
    }
    async getAllComments(){
        return Comment.findAll({ include: [Image, Video] });
        Comment.getImages()
    }
}

const mainService = new MainService()
module.exports = {
    mainService
};
