const express = require('express');
const router = express.Router();
const ControllerMyFood = require('../controllers/controllerMyFood')

router.get('/myfoodliv8', ControllerMyFood.showAllList)
router.get('/myfoodliv8/add', ControllerMyFood.addPage)
router.post('/myfoodliv8/add', ControllerMyFood.addPost)
router.get('/myfoodliv8/edit', ControllerMyFood.editPage)
// router.post('/myfoodliv8/edit', ControllerMyFood.editPost)

module.exports = router;