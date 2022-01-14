var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('fiestas', { title: 'CEU-Fiestas' });
});

module.exports = router;