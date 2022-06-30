const { Op } = require("sequelize");
const Ticket = require('../model/Ticket');


const createTicket = async (req, res) => {
  const { userId, ticketImage, eventName, categoryId, address, date, time, value, description } = req.body;

  if (!userId){
    return res.status(400).send({ msg: 'UserId is required', status: 400 });
  }

  const ticket = await Ticket.create({
    userId,
    ticketImage,
    eventName,
    categoryId,
    address,
    date,
    time,
    value,
    description,
    toSell: true
  });

  return res.status(200).send({ ticket });
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