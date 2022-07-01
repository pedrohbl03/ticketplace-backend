const Ticket = require('../model/Ticket')
const User = require('../model/User')
const Category = require('../model/Category')

const getUserTicketsToSell = async (req, res) => {
  const { userId } = req.body;

  const tickets = await User.findByPk(userId, {
    include: {
      association: 'User_Tickets',
      where: {
        toSell: true
      }
    }
  });

  if(!tickets) {
    return res.status(400).send({ msg: 'No tickets found', status: 400 });
  }

  const { id, User_Tickets } = tickets

  return res.status(200).send({ id, User_Tickets });
}

const getUserTicketsBought = async (req, res) => {
  const { userId } = req.body;

  const tickets = await User.findByPk(userId, {
    include: {
      association: 'User_Tickets',
      where: {
        toSell: false
      }
    }
  });

  if(!tickets) {
    return res.status(400).send({ msg: 'No tickets found', status: 400 });
  }

  const { id, User_Tickets } = tickets

  return res.status(200).send({ id, User_Tickets });
}

const buyTicket = async (req, res) => {
  const { userId, ticketId } = req.body;

  const ticket = await Ticket.update(ticketId, {
    userId: userId,
    toSell: false
  });

  if(!ticket) {
    return res.status(400).send({ msg: 'No ticket found', status: 400 });
  }

  return res.status(200).send({ ticket, status: 200 });
}

module.exports = {
  getUserTicketsToSell,
  getUserTicketsBought,
  buyTicket
}