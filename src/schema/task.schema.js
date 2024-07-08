const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");

const Task = sequelize.define("task", {
  task_name: DataTypes.STRING,
  task_priority: {
    type: Sequelize.ENUM("low", "medium", "high"),
    defaultValue: "high",
  },
  capacity_hours: DataTypes.STRING,
  spend_hours: DataTypes.STRING,
  remaining_hours: DataTypes.STRING,
  status: {
    type: Sequelize.ENUM("to_do", "doing", "done"),
    defaultValue: "to_do",
  },
});
// Board.sync({ force: true });
// console.log("The table for the User model was just (re)created!");

module.exports = Task;
