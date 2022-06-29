'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      ticketImage: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
<<<<<<< HEAD
      },
=======
      }, 
>>>>>>> 217a1a04de05cc967e4af0d6ea6e55eb7ddfadab
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          }
        }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          },
        },
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          },
        },
      },
      value: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          },
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tickets');
  }
};
