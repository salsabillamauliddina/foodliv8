const auth = (req, res, next) => {
    if (req.session.userId) {
        next()
    } else {
        res.redirect('/failed?message=You must login first!')
    }
}

module.exports = auth;