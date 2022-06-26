const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init (connection) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          }
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          }
        }
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          lenght: {
            min: 3,
            max: 255
          }
        }
      }
    }, {
      sequelize: connection,
    });
  }
}

module.exports = User