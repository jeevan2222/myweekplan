const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");
const Board = require("./board.schema");

// Define User model
const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT,
});

// Define relationships
User.hasOne(Board);
Board.belongsTo(User); 

// Synchronize models
// sequelize.sync({ alter: true });

module.exports = User;
