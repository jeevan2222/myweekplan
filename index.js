const express = require("express");
const app = express();
const port = 6969;
const userRouter = require("./src/router/user.route");
const Dbconnection = require("./src/database/db.config");
// Middleware to parse JSON
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hey Dev");
});

app.use("/users", userRouter);

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
