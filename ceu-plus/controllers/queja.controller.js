const db = require("../models");
const Queja = db.quejas;
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
    const new_queja = {
        title: req.body.title,
        firstName: req.body.nombre,
        email: req.body.email,
        mensaje: req.body.mensaje
    };

    // Save User in the database
    Queja.create(new_queja)
        .then(res.redirect('/quejas'))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred."
            });
        })
}

exports.findUser = (req, res) => {
    Queja.findAll().then()
}
