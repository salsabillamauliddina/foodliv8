const express = require('express');
const router = express.Router();
const ControllerFoodList = require('../controllers/controllerFoodList')

router.get('/foodlist', ControllerFoodList.showFoodList);
router.get('/foodlist/add', ControllerFoodList.addFoodPage);
router.post('/foodlist/add', ControllerFoodList.addFoodPost);
router.get('/foodlist/:id/edit', ControllerFoodList.editFoodPage);
router.post('/foodlist/:id/edit', ControllerFoodList.editFoodPost);
router.get('/foodlist/:id/delete', ControllerFoodList.deleteFood);

module.exports = router