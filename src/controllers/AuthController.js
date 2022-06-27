const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const Auth = require('../model/Auth');



const createUser = async (req, res) => {
  let { name, lastName, phoneNumber, dateOfBirth, email, password } = req.body;

  if (await User.findOne({ where: { email: req.body.email } })) {
    return res.status(400).send({ error: 'Email already exists' });
  }

  const user = await User.create({
    name,
    lastName,
    phoneNumber,
    dateOfBirth,
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


  // TODO: CREATE A JWT TOKEN - AND SAVE IN DATABASE
/*   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  }); */

  return res.status(200).send({ msg: 'User logged in', data: { name: user.name, lastName: user.lastName, email: user.email }, token });
}

const logoutUser = async (req, res) => {
  return res.status(200).send({ msg: 'User logged out' });
}

module.exports = {
  createUser,
  loginUser,
  logoutUser
}