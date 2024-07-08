const express = require("express");
const app = express();
const port = 6969;
const cors = require("cors");
const userRouter = require("./src/router/user.route");
const boardRouter = require("./src/router/board.route");
const taskRouter = require("./src/router/task.route");
const Dbconnection = require("./src/database/db.config");
const bodyParser = require("body-parser");
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.get("/test", (req, res) => {
  res.send("Hey Dev");
});
app.use("/users", userRouter);
app.use("/board", boardRouter);
app.use("/task", taskRouter);
app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: true,
    message: "No Such URL",
    data: null,
  });
});
app.listen(port, () => {
  console.log("Server running on port", port);
});
