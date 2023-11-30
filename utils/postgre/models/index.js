'use strict';
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);

//Config and Connect to Database
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })

//Code o day k chay??

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Create Database Object
db.receivers = require("./receivers.js")(sequelize, Sequelize.DataTypes);
db.users = require("./users.js")(sequelize, Sequelize.DataTypes);

//Create Associations
db.users.hasMany(db.receivers, {
  foreignKey: 'userID',
});
db.receivers.belongsTo(db.users, {
  foreignKey: 'userID',
});

//sequelize migration:generate --name receiverAddFogKey
//sequelize seed:generate --name your-seed-file-name
module.exports =  db;
