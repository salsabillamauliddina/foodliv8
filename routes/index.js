const express = require('express');
const router = express.Router();
const homeRoute = require('./homeRoute');
const aboutUsRoute = require('./aboutUsRoute');
const myFoodRoute = require('./myFoodRoute');
const foodListRoute = require('./foodListRoute');
const signUpRoute = require('./signUpRoute');
const loginRoute = require('./loginRoute')

const mid = (req, res, next) => {
    console.log(req.session)
    next()

}

router.use('/', mid, loginRoute)
router.use('/', homeRoute)
router.use('/', aboutUsRoute)
router.use('/', myFoodRoute)
router.use('/', foodListRoute)
router.use('/', signUpRoute)

module.exports = router