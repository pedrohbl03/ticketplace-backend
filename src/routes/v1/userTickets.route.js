const express = require('express');
const UserTicketsController = require('../../controllers/UserTicketsController');

const router = express.Router();

router
  .route('/sell/:userId')
  .get(UserTicketsController.getUserTicketsToSell)
  .post(UserTicketsController.createUserTicket)

router
  .route('/bought/:userId')
  .get(UserTicketsController.getUserTicketsBought)

router
  .route('/:userTicketsId')
  .patch(UserTicketsController.updateUserTicketById)

module.exports = router;