const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const { User, Ticket, Category } = require('../model');

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
Category.init(connection);

User.associate(connection.models);
Ticket.associate(connection.models);

module.exports = connection