const { Model, DataTypes } = require('sequelize');

class Ticket extends Model {
  static init(connection) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId : {
        type: DataTypes.UUID,
        allowNull: false,
      },
      ticketImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toSell: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    }, {
      sequelize: connection,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'owner'});
  }
}

module.exports = Ticket