var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const users = require("../controllers/user.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Log In', user: req.session.user });
});

router.post('/', function(req, res){
    username = req.body.username;
    password = req.body.password;
    console.log(password);
    userTmp = users.findUser;
    console.log(userTmp.password);
    if(bcrypt.compareSync(password, userTmp.password)){
        console.log(userTmp);
            req.session.user = userTmp;
            req.session.success = 'Autenticado con éxito';
            res.redirect('/profile');
    } else {
        req.session.error = 'Usuario o contraseña incorrectos';
        res.redirect('back');
    }
});

module.exports = router;
