const { Food, User, Favourite } = require('../models')

class ControllerMyFood {
    static showAllList(req, res) {
        res.render('myfoodliv8')
    }

    static showAddPage(req, res) {
        res.render('addfood')
    }
}

module.exports = ControllerMyFood;