const { Food } = require('../models')

class ControllerFoodList {
    static showFoodList(req, res) {
        Food.findAll()
        .then(data => {
            res.render('foodlist', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addFoodPage(req, res) {
        res.render('addfood')
    }

    static addFoodPost(req, res) {
        let {food_name, origin, category, description} = req.body;

        Food.create({food_name, origin, category, description})
        .then(data => {
            res.redirect('/foodlist')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editFoodPage(req, res) {
        let id = req.params.id;

        Food.findByPk(id)
        .then(data => {
            res.render('editfood', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editFoodPost(req, res) {
        let id = req.params.id;
        let {food_name, origin, category, description} = req.body;

        Food.update({food_name, origin, category, description}, {
            where : {id}
        })
        .then(() => {
            res.redirect('/foodlist')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteFood(req, res) {
        let id = req.params.id;
        Food.destroy({
            where : {id}
        })
        .then(() => {
            res.redirect('/foodlist')
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = ControllerFoodList