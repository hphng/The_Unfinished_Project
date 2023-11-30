'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "receivers",
      [
        {
          email: "m1hnguyen150403@gmail.com",
          name: "Minh Nguyen",
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   email: "huyphung_2025@depauw.edu",
        //   name: "Huy Phung",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // }
      ]
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('receivers', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
