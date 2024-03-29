const express = require('express');
const UserTicketsController = require('../../controllers/UserTicketsController');
const { auth } = require('../../middleware/auth');


const router = express.Router();

router
  .route('/sell/:userId')
  .get(auth, UserTicketsController.getUserTicketsToSell)

router
  .route('/bought/:userId')
  .get(auth, UserTicketsController.getUserTicketsBought)

router
  .route('/buy/:ticketId')
  .patch(auth, UserTicketsController.buyTicket)


module.exports = router;