const express = require("express");
const BoardController = require("../controller/board.controller");
const router = express.Router();
const {auth}=require("../auth/user.auth")

router.post("/create", auth,BoardController.createBoard);
router.get("/", auth,BoardController.getBoard);
module.exports = router;
