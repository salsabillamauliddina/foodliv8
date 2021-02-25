const ControllerMyFood = require("./controllerMyFood");

class ControllerHome {
    static showHome(req, res) {
        res.render('home')
    }

}

module.exports = ControllerHome;