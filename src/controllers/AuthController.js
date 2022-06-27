const bcrypt = require('bcrypt');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');
const User = require('../model/User');



const createUser = async (req, res) => {
  let { name, lastName, phoneNumber, email, password } = req.body;

  if (await User.findOne({ where: { email: req.body.email } })) {
    return res.status(400).send({ error: 'Email already exists' });
  }

  const user = await User.create({
    name,
    lastName,
    phoneNumber,
    email,
    password: await bcrypt.hash(password, 8)
  });

  return res.status(200).send({ msg: 'User created', data: [{ name, lastName, email }] });
}

const loginUser = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    return res.status(400).send({ error: 'User not found' });
  }

  const isValid = await bcrypt.compare(req.body.password, user.password);

  if (!isValid) {
    return res.status(400).send({ error: 'Invalid password' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });

  return res.status(200).send({
    msg: 'User logged in',
    data: {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
    },
    token
  });
}

const logoutUser = async (req, res) => {
  const { token, userId } = req.body;

  if (!token) {
    return res.status(400).send({ error: 'No token provided' });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    return res.status(400).send({ error: 'Invalid token' });
  }

  if (decoded.id !== userId) {
    return res.status(400).send({ error: 'Invalid token' });
  }

  return res.status(200).send({ msg: 'User logged out' });
}

module.exports = {
  createUser,
  loginUser,
  logoutUser
}