'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class receivers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // receivers.belongsTo(models.users, {
      //   foreignKey: 'userId',
      // });
      // define association here
    }
  }
  receivers.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure email is not null
      unique: true, // Ensure email is unique
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format', // Custom error message for invalid email
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure name is not null
    },

    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  }, {
    sequelize,
    modelName: 'receivers',
  });
  return receivers;
};