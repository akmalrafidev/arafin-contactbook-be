const Sequelize = require("sequelize");
const databaseConfiguration = require("./databaseConfiguration");

const sequelize = new Sequelize(
  databaseConfiguration.DATABASE,
  databaseConfiguration.USERNAME,
  databaseConfiguration.PASSWORD,
  {
    host: databaseConfiguration.HOST,
    dialect: databaseConfiguration.dialect,
  }
);

  module.exports = sequelize
