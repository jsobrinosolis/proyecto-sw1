var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('profile', { title: 'Usuarios registrados', user: req.session.user});
});

module.exports = router;
