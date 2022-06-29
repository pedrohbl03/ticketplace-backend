const User = require('../model/User');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  if (users.length === 0) {
    return res.status(404).send({ error: 'No users found' });
  }

  return res.send(users);
}

const getUserById = async (req, res) => {
  const { userId } = req.params
  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }

  const { profileImage, name, lastName, email, phoneNumber } = user

  return res.send({ profileImage, name, lastName, email, phoneNumber });
}

const updateUserById = async (req, res) => {
  let { profileImage, email, phoneNumber, password, newPassword } = req.body;

  if(password && !newPassword) {
    return res.status(400).send({ error: 'New password is required' });
  }

  if(password && newPassword) {
    const user = await User.findByPk(req.params.userId);
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).send({ error: 'Invalid password', status: 400 });
    }

    password = await bcrypt.hash(newPassword, 8);

  }

  const user = await User.update({ profileImage, email, phoneNumber, password }, { 
    where: { 
      id: req.params.userId 
    } 
  });

  return res.status(200).send({ msg: 'User updated', status: 200 });
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