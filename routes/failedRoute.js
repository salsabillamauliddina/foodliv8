const express = require('express');
const router = express.Router();

router.get('/failed', (req, res) => {
    let errormsg = req.query;
    console.log(errormsg)
    res.render('failed', { errormsg })
});

module.exports = router