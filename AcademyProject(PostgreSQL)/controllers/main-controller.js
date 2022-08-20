const { mainService } = require("../services/main-service");

async function getBooks(req,res){
    const books = await mainService.getAllBooks();

    return res.send({
        succes:true,
        data:{
            books
        }
    });
}
async function getAuthors(req,res){
    const authors = await mainService.getAllAuthors();

    return res.send({
        succes:true,
        data:{
            authors
        }
    });
}
async function getImages(req,res){
    const images = await mainService.getAllImages();

    return res.send({
        succes:true,
        data:{
            images
        }
    });
}
async function getVideos(req,res){
    const videos = await mainService.getAllVideos();

    return res.send({
        succes:true,
        data:{
            videos
        }
    });
}
async function getComments(req,res){
    const comments = await mainService.getAllComments();

    return res.send({
        succes:true,
        data:{
            comments
        }
    });
}

module.exports = {
    getBooks,
    getAuthors,
    getImages,
    getVideos,
    getComments
}
