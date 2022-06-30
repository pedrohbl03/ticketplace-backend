const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const { User, Ticket, UserTickets, Category } = require('../model');

const connection = new Sequelize(dbConfig)

connection.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

User.init(connection);
Ticket.init(connection);
UserTickets.init(connection);
Category.init(connection);

module.exports = connection