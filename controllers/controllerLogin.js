const { User } = require('../models');
const { comparePassword } = require('../helper/bcrypt')

class ControllerLogin {
    static showLoginPage(req, res) {
        res.render('login')
    }

    static loginPost(req, res) {
        let { email, password } = req.body;

        User.findOne({
            where: {email}
        })
        .then(user => {
            const correctPassword = comparePassword(req.body.password, user.password)

            if(user && correctPassword) {
                req.session.userId = {
                    id : user.id,
                    first_name : user.first_name,
                    last_name : user.last_name
                }
                res.redirect('/')
            } else {
                res.redirect('/failed?message=Invalid email/password')
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = ControllerLogin;