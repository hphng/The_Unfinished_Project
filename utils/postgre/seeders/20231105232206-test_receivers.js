'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('receivers', null, {});
    await queryInterface.bulkInsert( "receivers", [
        {
          email: "m1hnguyen150403@gmail.com",
          name: "Minh Nguyen",
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }])

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('receivers', null, {});
  }
};
