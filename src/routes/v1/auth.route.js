const express = require('express');
const AuthController = require('../../controllers/AuthController');
const { auth } = require('../../middleware/auth');

const router = express.Router();

router
  .route('/login')
  .post(AuthController.loginUser)

router
  .route('/register')
  .post(AuthController.createUser)

router
  .route('/logout')
  .post(auth, AuthController.logoutUser)

module.exports = router;