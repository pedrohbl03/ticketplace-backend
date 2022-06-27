const User = require('../model/User');

const getAllUsers = async (req, res) => {
  const users = await User.findAll();

  if (users.length === 0) {
    return res.status(404).send({ error: 'No users found' });
  }

  return res.send(users);
}

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }

  return res.send(user);
}

const updateUserById = async (req, res) => {
  const user = await User.update(req.body, { 
    where: { 
      id: req.params.userId 
    } 
  });

  return res.status(200).send(user);
}

const deleteUserById = async (req, res) => {
  const user = await User.delete(req.params.userId);
  
  return res.status(200).send(user);
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
}