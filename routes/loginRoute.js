const express = require('express');
const router = express.Router();
const ControllerLogin = require('../controllers/controllerLogin')

router.get('/login', ControllerLogin.showLoginPage);
router.post('/login', ControllerLogin.loginPost);

module.exports = router