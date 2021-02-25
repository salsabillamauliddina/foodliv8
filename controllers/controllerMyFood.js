const { Food, User, Favourite } = require('../models')

class ControllerMyFood {
    static showAllList(req, res) {
        let { id, first_name, last_name } = req.session.userId
        Favourite.findAll({
            where : {UserId : id},
            include : [
                {
                    model : Food
                }
            ]
        })
        .then(data => {
            res.render('myfoodliv8', { data, first_name, last_name })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addPage(req, res) {
        let errormsg = req.query;
        Food.findAll()
        .then(data => {
            res.render('addlistfavourite', { data, errormsg })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addPost(req, res) {
        let { FoodId, favoriteListName, listDescription } = req.body;
        let UserId =  req.session.userId.id;

        Favourite.create({ UserId, FoodId, favoriteListName, listDescription })
        .then(data => {
            res.redirect('/myfoodliv8')
        })
        .catch(err => {
            // res.send(err)
            let errors = [];
            err.errors.forEach(el => {
                errors.push(el.message)
            });
            res.redirect(`/myfoodliv8/add?errors=${errors}`)
        })
    }

    static editPage(req, res) {
        let { id, first_name, last_name } = req.session.userId;
        let mainData;
        
        Favourite.findAll({
            where : {UserId : id},
            include : [
                {
                    model : User
                }
            ]
        })
        .then(data => {
            mainData = data;
            return Food.findAll()
        })
        .then(food => {
            res.render('editlistfavourite', { mainData, food , first_name, last_name })
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = ControllerMyFood;
