module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Deporte', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        tableName: 'deportes'
    });
};
