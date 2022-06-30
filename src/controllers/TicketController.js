const { Op } = require("sequelize");
const Ticket = require('../model/Ticket');
const UserTickets = require('../model/UserTickets');



const createTicket = async (req, res) => {
  const { eventName, address, categoryId, date, ticketImage, time, value, description, userId } = req.body;
  console.log(req.body)
  const { ticket, userTicket } = await Ticket.create({
    eventName,
    address,
    categoryId,
    ticketImage,
    date,
    time,
    value,
    description
  }).then(async (ticket) => {
    const newTicket = {
      ticket_id: ticket.id,
      user_id: userId,
      toSell: true
    }
    const userTicket = await UserTickets.create(newTicket);

    return { ticket, userTicket }
  });    

  return res.status(200).send({ ticket, userTicket, userId });
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