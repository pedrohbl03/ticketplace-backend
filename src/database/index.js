const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const { User, Ticket, UserTickets } = require('../model');
const { connect } = require('../routes/v1/user.route.js');

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

module.exports = connection