const User = require('../models/User');
const createUserService = require('../services/createUserService');
const { loginUser } = require('../services/loginUserService');

exports.createUserController = async (req, res) => {
  try {
    const userResult = await createUserService.createUser(req.body);
    res.status(200).json(userResult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUsersController = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUserController = async(req, res) => {
  try {
    const loginResult = await loginUser(req.body);
    res.status(200).json(loginResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
