var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('actualidad', { title: 'CEU-Actualidad' });
});

module.exports = router;