const express = require('express');
const router = express.Router();
const homeRoute = require('./homeRoute');
const aboutUsRoute = require('./aboutUsRoute');
const myFoodRoute = require('./myFoodRoute');
const foodListRoute = require('./foodListRoute');
const signUpRoute = require('./signUpRoute');
const loginRoute = require('./loginRoute');
const failedRoute = require('./failedRoute')
const logoutRoute = require('./logoutRoute');
// const auth = require('../middlewares/auth')

router.use('/', loginRoute)
router.use('/', homeRoute)
router.use('/', signUpRoute)
router.use('/', failedRoute)
router.use('/', logoutRoute)

// router.use(auth)

router.use('/', aboutUsRoute)
router.use('/', foodListRoute)
router.use('/', myFoodRoute)

module.exports = router