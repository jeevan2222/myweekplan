const BoardModel = require("../model/boardr.model");

const createBoard = async (req, res) => {
  try {
    const user = await BoardModel.createBoard(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getBoard = async (req, res) => {
  try {

    let userId=req.body.userId
    const user = await BoardModel.getBoard(userId);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBoard,
  getBoard
};
