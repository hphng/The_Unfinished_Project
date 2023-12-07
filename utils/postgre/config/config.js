"use strict";
require('dotenv').config();

console.log("Config file: Test .env connection")
console.log(process.env.PSQL_PASS)
console.log(process.env.PSQL_USER)

module.exports = {
  development: {
    username: process.env.PSQL_USER || "postgres",
    password: process.env.PSQL_PASS || "Harmony_love04",
    database: process.env.PSQL_D || "postgres", 
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
  // test: {
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: "mysql",
  //   logging: false,
  // },
  // production: {
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: "postgres",
  //   dialectOptions: {
  //     ssl: true,
  //   },
  // },
};