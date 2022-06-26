const { Model } = require('sequelize');

class UserTicket extends Model {
  static init(connection) {
    super.init({
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
    }, {
      sequelize: connection,
    });
  }
}

module.exports = UserTicket