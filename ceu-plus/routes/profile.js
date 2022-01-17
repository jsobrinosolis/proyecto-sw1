var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user.isAdmin){
        account_type = "Administrador"
    } else {
        account_type = "Usuario Registrado"
    }
    res.render('profile', { title: 'Usuarios registrados', nombre: req.session.user.username, tipo: account_type});
});

module.exports = router;
