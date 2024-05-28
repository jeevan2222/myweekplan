const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");

const Board = sequelize.define("board", {
  userId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  capacity: DataTypes.INTEGER,
});

module.exports = User;
