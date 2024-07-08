const TaskModel = require("../model/task.model");

const createTask = async (req, res) => {
  try {
    const user = await TaskModel.createTask(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllTask = async (req, res) => {
  try {
    boardId = req.params.id;
    const user = await TaskModel.getAllTask(boardId);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTask,
  getAllTask,
};
