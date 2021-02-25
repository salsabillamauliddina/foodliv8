const { User } = require('../models')

class ControllerSignUp {
    static signUpPage(req, res) {
        res.render('signup')
    }

    static signUpPost(req, res) {
        let { first_name, last_name, username, password, email, gender, user_location, birth_date } = req.body

        User.create({ first_name, last_name, username, password, email, gender, user_location, birth_date })
        .then(data => {
            res.send('Sign up success!')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static userListAdminOnly(req, res) {
        res.send('here')
    }

}

module.exports = ControllerSignUp;