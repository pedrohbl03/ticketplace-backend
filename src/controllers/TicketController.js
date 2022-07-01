const { Op } = require("sequelize");
const { sequelize } = require("../model/Ticket");
const Ticket = require('../model/Ticket');


const createTicket = async (req, res) => {
  const { userId, ticketImage, eventName, categoryId, address, date, time, value, description } = req.body;

  if (!userId) {
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
  const tickets = await Ticket.findAll({
    where: {
      toSell: true,
      userId: {
        [Op.not]: req.body.userId
      }
    }
  });
  return res.status(200).send({ tickets });
}

const getTicketsByName = async (req, res) => {
  const tickets = await Ticket.findAll({
    where: {
      eventName: {
        [Op.substring]: req.params.search
      }
    }
  });

  return res.status(200).send({ tickets });
}

const getTicketById = async (req, res) => {
  const ticket = await Ticket.findByPk(req.params.ticketId);

  return res.status(200).send({ ticket });
}

const updateTicketById = async (req, res) => {
  const { userId, ticketImage, eventName, categoryId, address, date, time, value, description } = req.body;

  const ticket = await Ticket.update({
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
  }, { where: { id: req.params.ticketId } });

  return res.status(200).send({ ticket });
}

const deleteTicketById = async (req, res) => {
  const ticket = await Ticket.destroy({ where: { id: req.params.ticketId } });

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