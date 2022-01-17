const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgresql://postgres:qwerty@localhost:5432/ceu-plus');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, Sequelize);
db.quejas = require("./queja")(sequelize, Sequelize);
db.objetos = require("./objeto")(sequelize, Sequelize);
db.finder = require("./finder")(sequelize, Sequelize);
db.deportes = require("./deporte")(sequelize, Sequelize);

module.exports = db;
