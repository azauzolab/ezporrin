const Sequelize = require('sequelize');
const Config = require("../config.js");
const sequelize = new Sequelize(Config.database.database, Config.database.username, Config.database.password, {
  host: Config.database.host,
  dialect: Config.database.dialect
});

module.exports = sequelize;
