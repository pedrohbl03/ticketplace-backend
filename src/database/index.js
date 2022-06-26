const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const { User, Ticket, UserTickets } = require('../model');

const connection = new Sequelize(dbConfig)

User.init(connection);
Ticket.init(connection);
UserTickets.init(connection);

module.exports = connection