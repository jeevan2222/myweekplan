const userModel = require("../model/customer.model");

const createUser = async (req, res) => {
  try {
    const user = await userModel.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const user = await userModel.loginUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  loginUser,
};
