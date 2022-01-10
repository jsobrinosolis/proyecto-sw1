const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const new_user = {
        firstName: req.body.nombre,
        lastName: req.body.apellido,
        isAdmin: req.body.tipo_cuenta === "Administrador",
        username: req.body.username,
        grado: req.body.grado,
        email: req.body.email,
        password: req.body.psw
    };

    // Save Tutorial in the database
    User.create(new_user)
        .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    });
}
