const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT,
  id: DataTypes.TEXT,
  //   otp: DataTypes.TEXT,
  //   isemailverified: {
  //     type: DataTypes.BOOLEAN,
  //     defaultValue: false,
  //   },
});
User.hasOne(User, { foreignKey: "refered_by" });
User.belongsTo(UserSchema, { foreignKey: "refered_by" });
// sequelize.sync({ force: true });
// console.log("All models were synchronized successfully.");
module.exports = User;
