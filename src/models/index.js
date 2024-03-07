const sequelize = require("../utils/databaseInitialization");

const User = require("./User");
const Contact = require("./Contact");

User.hasMany(Contact, { foreignKey: 'userId' });
Contact.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Contact,
};
