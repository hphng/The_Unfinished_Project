const { Sequelize } = require('sequelize');

require('dotenv').config();
//console.log(process.env.PSQL_USER);
//Create a Sequelize instance with your configuration
const sequelize = new Sequelize(
  process.env.PSQL_D, // Database name
  process.env.PSQL_USER, // Database username
  process.env.PSQL_PASS, // Database password
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

//Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to PostGres.');
  })
  .catch((error) => {
    console.log(error);
  });


