const express = require("express");
const UserController = require("../controller/customer.controller");
const router = express.Router();

router.post("/create", UserController.createUser);
router.post("/login", UserController.loginUser);
module.exports = router;
