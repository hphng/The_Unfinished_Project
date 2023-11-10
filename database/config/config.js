"use strict";
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PSQL_USER || "postgres",
    password: process.env.PSQL_PASS,
    database: process.env.PSQL_D || "postgres", 
    host: process.env.DB_HOST || "localhost:5432",
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