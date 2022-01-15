var express = require('express');
var router = express.Router();
const db = require("../models");
const objetos = require("../controllers/objeto.controller");
const Objeto = db.objetos;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('objetos', { title: 'CEU-Objetos'});
});
router.post('/', objetos.create);

module.exports = router;