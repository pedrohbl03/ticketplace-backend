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

  static associate(models) {
    this.belongsTo(models.User, { foreignKey:  'user_id', as: 'user'})
    this.belongsTo(models.Ticket, {foreignKey: 'ticket_id', as: 'ticket'})
  }
}

module.exports = UserTicket