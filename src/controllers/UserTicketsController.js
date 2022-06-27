const UserTickets = require('../model/UserTickets');

const getUserTicketsToSell = async (req, res) => {
  const userTickets = await UserTickets.findAll({
    where: {
      userId: req.params.userId,
      toSell: true
    }
  });

  return res.status(200).send({ userTickets });
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
  const userTickets = await UserTickets.findAll({
    where: {
      userId: req.params.userId,
      toSell: false
    }
  });

  return res.status(200).send({ userTickets });
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