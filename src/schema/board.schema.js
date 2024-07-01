const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");

const Board = sequelize.define("board", {
  board_name: DataTypes.STRING,
  user_email: DataTypes.STRING,
  from_date: DataTypes.DATE,
  to_date: DataTypes.DATE,
  capacity: DataTypes.INTEGER,
  number_of_days: DataTypes.INTEGER,
});

Board.sync({ force: true });
console.log("The table for the User model was just (re)created!");
module.exports = Board;
