var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('quejas', { title: 'CEU-Quejas'});
});
router.post('/', function(req, res){
    req.session.success = 'Queja enviada con éxito';
    res.redirect('/quejas');
});

module.exports = router;
