const db = require("../models");
const Deportes = db.deportes;
const Op = db.Sequelize.Op;


// Create and Save a new Deporte
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Queja
    const new_deporte = {
        title: req.body.title,
        descripcion: req.body.descripcion
    };

    // Save User in the database
    Deportes.create(new_deporte )
        .then(res.redirect('/deportes'));
}