const sequelize = require("../utils/database");

const User = require("./User");
const Contact = require("./Contact");

User.hasMany(Contact, { foreignKey: 'userId' });
Contact.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Contact,
};
