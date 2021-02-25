const express = require('express');
const router = express.Router();
const ControllerMyFood = require('../controllers/controllerMyFood')

router.get('/myfoodliv8', ControllerMyFood.showAllList)
router.get('/myfoodliv8/add', ControllerMyFood.showAddPage)

module.exports = router