var express = require('express');
var router = express.Router();
const db = require("../models");
const finder = require("../controllers/finder.controller");
const Finder = db.finder;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('finder', { title: 'CEU-Finder'});
});
router.post('/', finder.create);

module.exports = router;