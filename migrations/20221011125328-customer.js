"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("customer", {
      customer_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      customer_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      customer_phone: {
        type: Sequelize.INTEGER(15),
        allowNull: false,
      },
      customer_email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("customer");
  },
};
