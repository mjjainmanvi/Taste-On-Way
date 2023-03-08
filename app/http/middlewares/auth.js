function auth(req, res, next) {
    if(req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/login')
}

module.exports = auth

// using this only login user hi jaa skte hai