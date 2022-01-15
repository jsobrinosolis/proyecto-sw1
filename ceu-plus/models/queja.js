module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Queja', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        mensaje: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        tableName: 'quejas'
    });
};
