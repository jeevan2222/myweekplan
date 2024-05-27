const express = require("express");
const UserController = require("../controller/customer.controller");
const router = express.Router();

router.post('/create', UserController.createUser);

module.exports = router;

