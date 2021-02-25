const express = require('express');
const router = express.Router();
const ControllerSignUp = require('../controllers/controllerSignUp')

router.get('/signup', ControllerSignUp.signUpPage)
router.post('/signup', ControllerSignUp.signUpPost)
router.get('/signup/userlist', ControllerSignUp.userListAdminOnly)

module.exports = router