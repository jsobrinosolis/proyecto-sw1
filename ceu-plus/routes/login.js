var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Ejemplo Log In' });
});
router.post('/', function (req, res) {
    username = req.body.username;
    password = req.body.password;
    userTmp = users[username];
    console.log(username);
    console.log(password);
    console.log(userTmp);

    if(userTmp){
        if(password === userTmp.password){
            req.session.user = userTmp;
            req.session.success = 'Autenticado con éxito';
            res.redirect('/profile');
        } else{
            req.session.error = 'Usuario/Contraseña incorrectos';
            res.redirect('back')
        }
    } else{
        req.session.error = 'Usuario/Contraseña incorrectos';
        res.redirect('back')
    }
});

const users = {
    admin: {
        username: 'admin',
        password: 'admin'
    }
};


module.exports = router;
