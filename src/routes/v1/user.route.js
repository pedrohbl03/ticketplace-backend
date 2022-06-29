const express = require('express');
const { auth } = require('../../middleware/auth');
const UserController = require('../../controllers/UserController');

const router = express.Router();

router
  .route('/')
  .get(UserController.getAllUsers);

router
  .route('/:userId')
  .get(auth, UserController.getUserById)
  .patch(auth, UserController.updateUserById)
  .delete(UserController.deleteUserById);

module.exports = router;