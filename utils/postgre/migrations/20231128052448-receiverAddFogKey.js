'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('receivers', "userID", {

      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE', // Define the actions on update and delete
      onDelete: 'CASCADE',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('receivers', 'userID')
  }
};
