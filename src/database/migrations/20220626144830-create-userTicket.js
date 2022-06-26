'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userTickets', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      ticket_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tickets',
          key: 'id'
        },
      },
      toSell: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userTickets');
  }
};
