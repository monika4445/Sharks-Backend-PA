const express = require('express');
const path = require('path');
const authRouter = require('./routes/auth-router');
const mainRouter = require('./routes/main-router');
const appRouter = require('./routes/app-router');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const appErrorHandler = require("./errors/appErrorHandler");

const redis = require('redis');
const connectRedis = require('connect-redis');

const app = express();

const RedisStore = connectRedis(session);
const client = redis.createClient();

client.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' , err);
});
client.on('connect', function () {
    console.log('Connected to redis successfully');
});

app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.set('layout', './layouts/main.ejs');
app.set('views', path.resolve('views'));
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(session({
    secret: process.env.COOKIE_SECRET,
    store: new RedisStore({
        client: client,
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge:  3600000
    }
}));

app.use('/auth', authRouter);
app.use('/app', appRouter);
app.use('/', mainRouter);

app.use((req, res) => {
    res.status(404).sendFile(path.resolve('public/404.html'))
})

app.use(appErrorHandler);

app.listen(process.env.PORT || 3000);
