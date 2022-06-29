const express = require('express');
const TicketController = require('../../controllers/TicketController');
const { auth } = require('../../middleware/auth');


const router = express.Router();

router
  .route('/')
  .post(auth, TicketController.createTicket)
  .get(TicketController.getAllTickets);

router
  .route('/:ticketId')
  .get(TicketController.getTicketById)
  .patch(TicketController.updateTicketById)
  .delete(TicketController.deleteTicketById);

router
  .route('/search/:search')
  .get(TicketController.getTicketsByName);

module.exports = router;