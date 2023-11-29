'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "minhnguyen150403@gmail.com",
          password: "!agihasgksdhg333...sfa",
          dob: "05-19-2003",
          username: "Minh Nguyen",

          // createdAt: new Date(),
          // updatedAt: new Date(),
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
