'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      // await queryInterface.addColumn('receivers', 'status', {
      //   type: Sequelize.STRING,
      //   allowNull: true,
      // }),

      await queryInterface.addConstraint('receivers', {
        fields: ['email'],
        type: 'unique',
        name: 'unique_email_cons',
      }),
    ]);

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      //queryInterface.removeColumn('receivers', 'status'),
      queryInterface.removeConstraint('receivers', 'unique_email_cons'),
    ]);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

  }
};
