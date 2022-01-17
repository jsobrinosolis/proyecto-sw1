var express = require('express');
var router = express.Router();
const db = require("../models");
const objeto = require("../controllers/objeto.controller");
const Objeto = db.objetos;


router.get('/', function(req, res, next) {
    Objeto.findAll({raw: true}).then(function (resultado2) {
        console.log(resultado2);
        res.render('objetos', { title: 'CEU-OBJETO', objeto: resultado2});
    })
});

router.post('/', objeto.create);

module.exports = router;