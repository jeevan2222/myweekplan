const express = require("express");
const TaskController = require("../controller/task.controller");
const router = express.Router();
const { auth } = require("../auth/user.auth");

router.post("/create", auth, TaskController.createTask);
router.get("/:id", auth, TaskController.getAllTask);

module.exports = router;
