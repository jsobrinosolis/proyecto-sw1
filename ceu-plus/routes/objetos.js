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
/*router.post('/', function(req, res){
    req.session.success = 'Queja enviada con éxito';
    res.redirect('/quejas');
});*/

module.exports = router;