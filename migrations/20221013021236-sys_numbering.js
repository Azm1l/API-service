"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sys_numbering", {
      number_code: {
        type: Sequelize.STRING(4),
        allowNull: false,
        primaryKey: true,
      },
      prefix: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      last_number: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: 0,
      },
      last_by: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sys_numbering");
  },
};
