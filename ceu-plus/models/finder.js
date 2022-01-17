module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Finder', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'finder'
    });
};
