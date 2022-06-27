const Ticket = require('../model/User');

const createTicket = async (req, res) => {
  const ticket = await Ticket.create(req.body);

  return res.status(200).send({ ticket });
}

const getAllTickets = async (req, res) => {
  const tickets = await Ticket.findAll();

  return res.status(200).send({ tickets });
}

const getTicketById = async (req, res) => {
  const ticket = await Ticket.findById(req.params.ticketId);

  return res.status(200).send({ ticket });
}

const updateTicketById = async (req, res) => {
  const ticket = await Ticket.update(req.params.ticketId, req.body);

  return res.status(200).send({ ticket });
}

const deleteTicketById = async (req, res) => {
  const ticket = await Ticket.delete(req.params.ticketId);

  return res.status(200).send({ ticket });
}

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById
}