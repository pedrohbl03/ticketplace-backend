const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(connection) {
    super.init({
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      sequelize: connection,
    });
  }
  // TODO: Create associated columns for user_id and ticket_id
}

module.exports = Category