const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");
const Task=require("./task.schema")
const Board = sequelize.define("board", {
  board_name: DataTypes.STRING,
  user_email: DataTypes.STRING,
  from_date: DataTypes.DATE,
  to_date: DataTypes.DATE,
  capacity: DataTypes.INTEGER,
  number_of_days: DataTypes.INTEGER,
});

// Define relationships
Board.hasOne(Task);
Task.belongsTo(Board); 
// sequelize.sync({ alter: true });
module.exports = Board;
