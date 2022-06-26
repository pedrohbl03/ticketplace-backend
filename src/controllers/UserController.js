const HTTP_STATUS = require('http-status');
const User = require('../model/User');


const createUser = (req, res) => {
  const user = User.create(req.body);

  return res.send(HTTP_STATUS[201], user);
}

const getAllUsers = async (req, res) => {
  const users = User.findAll();

  return res.send(HTTP_STATUS[200], users);
}

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId);

  return res.send(HTTP_STATUS[200], user);
}

const updateUserById = async (req, res) => {
  const user = await User.update(req.params.userId, req.body);

  return res.send(HTTP_STATUS[200], user);
}

const deleteUserById = async (req, res) => {
  const user = await User.delete(req.params.userId);

  return res.send(HTTP_STATUS[200], user);
}









module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById
}