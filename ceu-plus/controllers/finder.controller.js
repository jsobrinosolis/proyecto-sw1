const db = require("../models");
const Finder = db.finder;
const Op = db.Sequelize.Op;


// Create and Save a new Queja
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Queja
    const new_finder = {
        title: req.body.title,
        descripcion: req.body.descripcion
    };

    // Save User in the database
    Finder.create(new_finder)
        .then(res.redirect('/finder'));
}

exports.findUser = (req, res) => {
    Finder.findAll().then()
}