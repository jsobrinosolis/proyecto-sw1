const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:qwerty@localhost:5432/ceu-plus');

//testing connection
async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection established successfully with DB");
    } catch (e) {
        console.error("Unable to connect to the database: ", e);
    }
}

checkConnection();

const User =
