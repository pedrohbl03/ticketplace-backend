const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(connection) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Category