const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");
const Task = require("./task.schema");

const Board = sequelize.define("board", {
  board_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  from_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  to_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
    },
  },
  number_of_days: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
    },
  },
});

// Define relationships
Board.hasMany(Task, { foreignKey: "boardId" });
Task.belongsTo(Board, { foreignKey: "boardId" });

// Sync the database
sequelize.sync({ alter: true });

module.exports = Board;
