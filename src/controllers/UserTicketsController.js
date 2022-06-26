const HTTP_STATUS = require('http-status');
const UserTickets = require('../model/UserTickets');

const getUserTicketsToSell = (req, res) => {
  const userTickets = UserTickets.findAll({
    where: {
      userId: req.params.userId,
      toSell: true
    }
  });

  return res.send(HTTP_STATUS[200], userTickets);
}

const createUserTicket = (req, res) => {

  const newTicket = {
    ...req.body,
    userId: req.params.userId
  }

  const userTicket = UserTickets.create(newTicket);

  return res.send(HTTP_STATUS[201], userTicket);
}

const getUserTicketsBought = (req, res) => {
  const userTickets = UserTickets.findAll({
    where: {
      userId: req.params.userId,
      toSell: false
    }
  });

  return res.send(HTTP_STATUS[200], userTickets);
}

const updateUserTicketById = (req, res) => {
  const userTicket = UserTickets.update(req.body, {
    where: {
      id: req.params.userTicketsId
    }
  });

  return res.send(HTTP_STATUS[200], userTicket);
}


module.exports = {
  getUserTicketsToSell,
  createUserTicket,
  getUserTicketsBought,
  updateUserTicketById
}