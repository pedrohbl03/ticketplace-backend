const { Model, DataTypes } = require('sequelize');

class Auth extends Model {
  static init(connection) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize: connection,
    });
  }
  // TODO: Create associated columns for user_id and ticket_id
}

module.exports = Auth