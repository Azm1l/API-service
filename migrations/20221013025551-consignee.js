"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("consignee", {
      consignee_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      consignee_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      consignee_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      consignee_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      consignee_phone: {
        type: Sequelize.INTEGER(15),
        allowNull: false,
      },
      consignee_email: {
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
    await queryInterface.dropTable("consignee");
  },
};
