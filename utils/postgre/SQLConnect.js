//const { Sequelize } = require('sequelize');
const db = require("./models")

require('dotenv').config();
//console.log(process.env.PSQL_USER);
//Create a Sequelize instance with your configuration
// const sequelize = new Sequelize(
//   process.env.PSQL_D, // Database name
//   process.env.PSQL_USER, // Database username
//   process.env.PSQL_PASS, // Database password
//   {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//   }
// );

//Test the database connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to PostGres.');
  })
  .catch((error) => {
    console.log(error);
  });

//Test create object
console.log("test create model")
console.log(db.receivers)
console.log(db.users)


//Test Association
console.log("Association");
console.log("User:", Object.keys(db.users.associations));
console.log("Receiver:", Object.keys(db.receivers.associations));

