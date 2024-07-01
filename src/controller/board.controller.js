const BoardModel = require("../model/boardr.model");

const createBoard = async (req, res) => {
  try {
    const user = await BoardModel.createBoard(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBoard,
};
