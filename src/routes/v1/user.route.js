const express = require('express');
const UserController = require('../../controllers/UserController');

const router = express.Router();

router
  .route('/')
  .post(UserController.createUser)
  .get(UserController.getAllUsers);

router
  .route('/:userId')
  .get(UserController.getUserById)
  .patch(UserController.updateUserById)
  .delete(UserController.deleteUserById);

module.exports = router;