const { Op } = require("sequelize");
const Ticket = require('../model/Ticket');

const createTicket = async (req, res) => {
  const { address, date, time, value, description, userId } = req.body;
  const ticket = await Ticket.create({
    address,
    ticketImage,
    date,
    time,
    value,
    description
  });

  return res.status(200).send({ ticket, userId });
}

const getAllTickets = async (req, res) => {
  const tickets = await Ticket.findAll();

  return res.status(200).send({ tickets });
}

const getTicketsByName = async (req, res) => {
  const tickets = await Ticket.findAll({
    where: {
      address: {
        [Op.substring]: req.params.search
      }
    }
  });

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
  getTicketsByName,
  getTicketById,
  updateTicketById,
  deleteTicketById
}