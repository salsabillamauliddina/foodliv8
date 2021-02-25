const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.redirect(`/failed?message=${err.message}`)
        } else {
            res.redirect('/')
        }
    })

})

module.exports = router