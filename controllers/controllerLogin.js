const { User } = require('../models')

class ControllerLogin {
    static showLoginPage(req, res) {
        res.render('login')
    }

    static loginPost(req, res) {
        console.log(req.body)
        let { email, password } = req.body;

        User.findOne({
            where: {email}
        })
        .then(user => {
            console.log(user)
            if(user.password === password) {
                req.session.userId = user.id
                console.log(req.session)
                res.redirect('/')
            } else {
                res.redirect('/?message=Invalid email/password')
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = ControllerLogin;