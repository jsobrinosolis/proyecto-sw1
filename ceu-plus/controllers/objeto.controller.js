const db = require("../models");
const Objeto = db.objetos;
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
    const new_objeto = {
        title: req.body.title,
        descripcion: req.body.descripcion,
        email: req.body.email
    };

    // Save User in the database
    Objeto.create(new_objeto)
        .then(res.redirect('/objetos'));
    }

exports.findUser = (req, res) => {
    Objeto.findAll().then()
}
