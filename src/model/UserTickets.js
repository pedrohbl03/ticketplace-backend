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
      }
    }, {
      sequelize: connection,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
    this.belongsTo(models.Ticket, {
      foreignKey: 'ticket_id',
      onDelete: 'CASCADE',
    });
    
  }
}

module.exports = UserTicket