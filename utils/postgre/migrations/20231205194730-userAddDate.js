'use strict';

/** @type {import('sequelize-cli').Migration} */



module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

    });
    await queryInterface.addColumn('users', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'createdAt');
    await queryInterface.removeColumn('users', 'updatedAt');
  }
};
