module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Objeto', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'objetos'
    });
};