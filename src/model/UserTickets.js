const { Model, DataTypes } = require('sequelize');

class UserTicket extends Model {
  static init(connection) {
    super.init({
      user_id: {
        type: DataTypes.UUID,
      },
      ticket_id: {
        type: DataTypes.UUID,
      },
      toSell: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    }, {
      sequelize: connection,
      // TODO: Create associated columns for user_id and ticket_id
    });
  }
}

module.exports = UserTicket