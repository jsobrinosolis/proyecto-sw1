var express = require('express');
var router = express.Router();
const users = require("../controllers/user.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user.isAdmin){
        account_type = "Administrador"
    } else {
        account_type = "Usuario Registrado"
    }
    res.render('profile', { title: 'Mi perfil', nombre: req.session.user.username, tipo: account_type, metodo: req.method});
});

router.post('/', function(req, res, next) {
    if(req.session.user.isAdmin){
        User.findAll({raw: true}).then(function (result) {
            res.render('profile', { title: 'Mi perfil', lista: result, metodo: req.method });
        })
    }
});

module.exports = router;
