'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //Clear data first
    await queryInterface.bulkDelete('users', null, {});
    
    //seeding
    await queryInterface.bulkInsert( "users",
      [
        {
          email: "minhnguyen150403@gmail.com",
          password: "!agihasgksdhg333...sfa",
          dob: "05-19-2003",
          username: "minhnguy",
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
