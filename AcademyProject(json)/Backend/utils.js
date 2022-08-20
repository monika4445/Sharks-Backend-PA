function authMiddleware(req, res, next) {
    // delete req.session.user;
    if (req.session.user) {
        return next();
    }

    return res.redirect('/auth/login');
}

module.exports = {
    authMiddleware
}