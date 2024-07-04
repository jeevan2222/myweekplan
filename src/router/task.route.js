const express = require("express");
const TaskController = require("../controller/task.controller");
const router = express.Router();


router.post("/create", TaskController.createTask);


router.get("/", TaskController.getAllTask);

module.exports = router;