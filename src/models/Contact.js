const sequelize = require("../utils/databaseInitialization");
const { DataTypes } = require("sequelize");
const User = require("./User");

const Contact = sequelize.define(
  "Contact",
  {
    savedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
//   {
//     foreignKey: "userId",
//   }
);

// Contact.belongsTo(User, { foreignKey: 'userId' });

module.exports = Contact;
