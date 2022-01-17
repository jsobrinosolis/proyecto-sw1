var express = require('express');
var router = express.Router();
const db = require("../models");
const Deportes = db.deportes;


/* GET home page. */
router.get('/', function(req, res, next) {
    Deportes.findAll({raw: true}).then(function (result) {
        res.render('deportes', { title: 'CEU-Deportes', sport: result });
    })
});

module.exports = router;