const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myweeklyplan_dev", "postgres", "admin21", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
module.exports = sequelize;
