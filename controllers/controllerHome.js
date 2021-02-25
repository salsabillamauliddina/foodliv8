const ControllerMyFood = require("./controllerMyFood");

class ControllerHome {
    static showHome(req, res) {
        let msg = req.query;
        console.log(msg)
        res.render('home', { msg })
    }

}

module.exports = ControllerHome;