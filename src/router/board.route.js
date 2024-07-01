const express = require("express");
const BoardController = require("../controller/board.controller");
const router = express.Router();

router.post("/create", BoardController.createBoard);
module.exports = router;
