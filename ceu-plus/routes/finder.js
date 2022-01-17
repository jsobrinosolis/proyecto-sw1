var express = require('express');
var router = express.Router();
const db = require("../models");
const finder = require("../controllers/finder.controller");
const Finder = db.finder;


router.get('/', function(req, res, next) {
    Finder.findAll({raw: true}).then(function (resultado) {
        console.log(resultado);
        res.render('finder', { title: 'CEU-FINDER', finder: resultado});
    })
});

router.post('/', finder.create);

module.exports = router;