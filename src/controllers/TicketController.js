const HTTP_STATUS = require('http-status');
const Ticket = require('../model/User');

const createTicket = (req, res) => {
  const ticket = Ticket.create(req.body);

  return res.send(HTTP_STATUS[201], ticket);
}

const getAllTickets = (req, res) => {
  const tickets = Ticket.findAll();

  return res.send(HTTP_STATUS[200], tickets);
}

const getTicketById = (req, res) => {
  const ticket = Ticket.findById(req.params.ticketId);

  return res.send(HTTP_STATUS[200], ticket);
}

const updateTicketById = (req, res) => {
  const ticket = Ticket.update(req.params.ticketId, req.body);

  return res.send(HTTP_STATUS[200], ticket);
}

const deleteTicketById = (req, res) => {
  const ticket = Ticket.delete(req.params.ticketId);

  return res.send(HTTP_STATUS[200], ticket);
}








module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById
}