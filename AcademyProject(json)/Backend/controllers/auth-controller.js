const User = require('../models/user');
const bcrypt = require('bcrypt');
const AppError = require("../errors/AppError");

function login(req, res) {
    return res.render('login', { layout: './layouts/auth-layout', page_tab: 'login' });
}

function logout(req, res) {
    delete req.session.user;

    return res.redirect('/auth/login');
}

async function loginPost(req, res) {
    const email = req.body.email || '';
    const password = req.body.password || '';

    if (!email || !password) {
        return res.render('login', {
            errors: [
                'Invalid Password Or Email'
            ]
        })
    }

    const user = await User.getByEmail(email);
    if (!user) {
        return res.render('login', {
            errors: ['Incorrect Email']
        })
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return res.render('login', {
            errors: ['Incorrect Password']
        })
    }

    req.session.user = user;

    return res.redirect('/');
}

function register(req, res) {
    res.render('register', { layout: './layouts/auth-layout', page_tab: 'register' });
}

async function registerPost(req, res) {
    const age = Number(req.body.age || 0);
    const name = req.body.name || '';
    const lastname = req.body.lastname || '';
    const email = req.body.email || '';
    const password = req.body.password || '';
    const role = Number(req.body.role || 0);

    console.log(req.file);

    if (!age || !name || !lastname || !email || !password || !role || !req.file) {
        return res.render('register', {
            errors: ['All Fields Required']
        })
    }

    const user = await User.getByEmail(email);
    if (user) {
        return res.render('register', {
            errors: ['User of this Email already exists']
        })
    }

    const newUser = new User(age, name, lastname, email, password, role, req.file.filename);
    await newUser.save();

    req.session.user = newUser;

    return res.redirect('/');
}

module.exports = {
    login,
    logout,
    loginPost,
    register,
    registerPost
}