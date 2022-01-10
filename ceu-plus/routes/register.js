var express = require('express');
var router = express.Router();
const users = require("../controllers/user.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Registro CEU +' });
});

router.post('/', users.create);

module.exports = router;
