var express = require('express');
var router = express.Router();
const db = require("../models");
const queja = require("../controllers/queja.controller");
const Queja = db.quejas;

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('quejas', { title: 'CEU-Quejas'});
    Queja.findAll({raw: true}).then(function (result) {
        console.log(result);
        res.render('quejas', { title: 'CEU-Quejas', queja: result});
    })
});

router.post('/', queja.create);
/*router.post('/', function(req, res){
    req.session.success = 'Queja enviada con éxito';
    res.redirect('/quejas');
});*/

module.exports = router;
