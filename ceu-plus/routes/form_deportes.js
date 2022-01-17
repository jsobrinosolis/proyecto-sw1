var express = require('express');
var router = express.Router();
const deporte = require("../controllers/deportes.controller")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('form_deportes', { title: 'CEU-Deportes-Form' });
});

router.post("/", deporte.create)

module.exports = router;