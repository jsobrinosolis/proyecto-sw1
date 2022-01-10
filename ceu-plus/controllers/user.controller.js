const db = require("../models");
const User = db.users;
const bcrypt = require("bcrypt");
const Op = db.Sequelize.Op;

const saltRounds = 10;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const new_user = {
        firstName: req.body.nombre,
        lastName: req.body.apellido,
        isAdmin: req.body.tipo_cuenta === "Administrador",
        username: req.body.username,
        grado: req.body.grado,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.psw, saltRounds)
    };

    // Save User in the database
    User.create(new_user)
        .then(res.redirect('/register'))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred."
            });
        })
}

exports.findOne = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(data => {
        if(data){
            res.send(data);
        } else {
            res.status(404).send({
                message: "Cannot find user with that username."
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving user with that username."
        })
    })
}
