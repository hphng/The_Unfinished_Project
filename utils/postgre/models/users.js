'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.receivers, {
        foreignKey: 'userId',
      });
      
      // Receiver belongs to one User
      
      // define association here
    }
  }
  users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure email is not null
      //unique: true, // Ensure email is unique
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format', // Custom error message for invalid email
        },
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure name is not null
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure name is not null
    },

    dob: {
        type: DataTypes.DATE,
        allowNull: false,
    }

  }, {
    sequelize,
    modelName: 'user',
  });
  return users;
};