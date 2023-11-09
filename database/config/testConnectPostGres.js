const { Sequelize } = require('sequelize');
//const { mongoose }= require('mongoose');


require('dotenv').config();
console.log(process.env.PSQL_USER);
// Create a Sequelize instance with your configuration
// const sequelize = new Sequelize(
//   process.env.PSQL_D, // Database name
//   process.env.PSQL_USER, // Database username
//   "Harmony_love04", // Database password
//   {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//   }
// );

// Test the database connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection to the database has been established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });


//Test mongoose connection
// const connectMongo = async () => {
//   try {
//       await mongoose.connect(process.env.MONGODB_URI);
//       console.log("Connected to MongoDB.");
//   } catch (error) {
//       console.log(error);
//   }
// };