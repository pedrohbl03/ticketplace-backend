const { Model, DataTypes } = require('sequelize');

class Ticket extends Model {
  static init(connection) {
    super.init({
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          },
        },
      },
      date: {
        type: DataTypes.DATE,
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
        type: DataTypes.TIME,
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
        type: DataTypes.INTEGER,
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
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          },
        },
      },
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Ticket