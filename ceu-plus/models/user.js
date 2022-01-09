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


const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    grado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'users'
});

sequelize.sync();

module.exports = User;
