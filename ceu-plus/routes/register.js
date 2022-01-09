var express = require('express');
const bcrypt = require('bcrypt');
const user = require('/models/user');
var router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Registro CEU +' });
});

router.post('/', function (req, res) {
  registerUser();
});

async function registerUser() {
  try {
    aux = req.body.tipo_cuenta === "Administrador";
    await user.create({
      firstName: req.body.nombre,
      lastName: req.body.apellido,
      isAdmin: aux,
      username: req.body.nombre_usuario,
      grado: req.body.grado,
      email: req.body.email,
      password: req.body.password
    });
    console.log("Usuario registrado correctamente");
  } catch (e) {
    console.error("Error", e);
  }
}

module.exports = router;
