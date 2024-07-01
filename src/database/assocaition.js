const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");
const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT,

});

