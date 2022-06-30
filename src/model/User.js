const { Model, DataTypes } = require('sequelize');
const UserTickets = require('./UserTickets')

class User extends Model {
  static init (connection) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail:true
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      sequelize: connection,
    });
  }

  static associate(models) {
    this.hasMany(UserTickets, { foreignKey: 'user_id', as: 'User_Tickets'});
  } 
}

module.exports = User