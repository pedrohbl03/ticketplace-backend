const { Model, DataTypes } = require('sequelize');

class UserTicket extends Model {
  static init(connection) {
    super.init({
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      ticket_id: {
        type: DataTypes.UUID,
        references: {
          model: 'tickets',
          key: 'id'
        },
      },
      toSell: {
        type: DataTypes.BOOLEAN,
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