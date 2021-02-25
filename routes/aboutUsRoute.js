const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.send('here')
})

module.exports = router