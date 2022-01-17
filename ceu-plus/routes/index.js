var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const users = require("../controllers/user.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Log In', user: req.session.user });
});

router.post('/', async function(req, res){
    password = req.body.password;
    userTmp = await users.findUser(req, res);

    if(bcrypt.compareSync(password, userTmp[0].dataValues.password)){
        req.session.user = userTmp[0].dataValues;
        req.session.success = 'Autenticado con éxito';
        res.redirect('/profile');
    } else {
        req.session.error = 'Usuario o contraseña incorrectos';
        res.redirect('back');
    }
});

module.exports = router;
