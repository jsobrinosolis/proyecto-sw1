var express = require('express');
var router = express.Router();
const hash = require('pbkdf2-password')();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Log In', user: req.session.user });
});
router.post('/', function(req, res){
    username = req.body.username;
    userTmp = users[username];
    if(userTmp){
        console.log(userTmp);
        hash({password:req.body.password, salt:userTmp.salt}, function(err, pass, salt, hash){
            console.log(pass, salt);
            if(err) throw err;
            if (hash === userTmp.hash){
                req.session.user = userTmp;
                req.session.success = 'Autenticado con éxito';
                res.redirect('/profile');
            } else {
                req.session.error = 'Usuario o contraseña incorrectos';
                res.redirect('back');
            }
        })
    } else {
        req.session.error = 'Usuario o contraseña incorrectos';
        res.redirect('back');
    }
});

const users = {
    admin:{
        username: 'admin'
    }
};

hash({password: 'admin'}, function(err, pass, salt, hash){
    console.log("Hashing");
    if(err) throw err;
    users.admin.salt = salt;
    users.admin.hash = hash;
});

module.exports = router;
