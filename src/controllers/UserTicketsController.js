const Ticket = require('../model/Ticket')
const User = require('../model/User')
const UserTickets = require('../model/UserTickets');


const getUserTicketsToSell = async (req, res) => {
  const { userId } = req.body;

  const tickets = await Ticket.findAll({
    include: {
      association: 'User_Tickets',
      where: {
        toSell: true,
        user_id: userId
      }
    }
  })

  if (!user) {
    return res.status(404).send({ msg: 'User with tickets not found', status: 404 });
  }

  return res.status(200).send({ user });
}

const createUserTicket = async (req, res) => {
  const newTicket = {
    ...req.body,
    userId: req.params.userId
  }

  const userTicket = await UserTickets.create(newTicket);

  return res.status(200).send({ userTicket });
}

const getUserTicketsBought = async (req, res) => {
  const userId = req.params.userId
  const tickets = await Ticket.findAll({
    include: [{
      model: UserTickets,
      where: [`UserTicket.user_id = ${userId}`, 'UserTicket.toSell = false'],
    }]
  });

  return res.status(200).send({ tickets });
}

const updateUserTicketById = async (req, res) => {
  const userTicket = await UserTickets.update(req.body, {
    where: {
      id: req.params.userTicketsId
    }
  });

  return res.status(200).send({ userTicket });
}

module.exports = {
  getUserTicketsToSell,
  createUserTicket,
  getUserTicketsBought,
  updateUserTicketById
}