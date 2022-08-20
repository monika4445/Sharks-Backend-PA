const express = require("express")
const mainRouter = require('./routes/main_router');
const { Author } = require('./models')
const {Op} = require("sequelize");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', mainRouter);


app.use((req, res) => {
    res.status(404).send({
        success: false,
        messages: ['404 Page Not Found'],
    })
})

app.listen(process.env.PORT || 3000);
