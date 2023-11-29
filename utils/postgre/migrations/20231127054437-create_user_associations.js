'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
    
        email: {
          type: Sequelize.STRING,
          allowNull: false, // Ensure email is not null
          //unique: true, // Ensure email is unique
          validate: {
            isEmail: {
              args: true,
              msg: 'Invalid email format', // Custom error message for invalid email
            },
          },
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false, // Ensure name is not null
        },
    
        dob: {
            type: Sequelize.DATE,
            allowNull: false,
        }
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
      queryInterface.dropTable('users'),
      //queryInterface.removeConstraint('receivers', 'validateEmail'),
    ]);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

  }
};
