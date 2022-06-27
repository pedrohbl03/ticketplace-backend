const express = require('express');
const AuthController = require('../../controllers/AuthController');

const router = express.Router();

router
  .route('/login')
  .post(AuthController.loginUser)

router
  .route('/register')
  .post(AuthController.createUser)

router
  .route('/logout')
  .post(AuthController.logoutUser)

module.exports = router;