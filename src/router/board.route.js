const express = require("express");
const BoardController = require("../controller/board.controller");
const router = express.Router();

router.post("/create", BoardController.createBoard);
router.get("/:id", BoardController.getBoard);
module.exports = router;
