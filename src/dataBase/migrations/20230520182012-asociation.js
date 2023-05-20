'use strict';
const {ASSET_TABLE,AssetSchema} = require('../models/assets.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

      await queryInterface.addColumn(ASSET_TABLE,'employee_id',AssetSchema.employeeId);

  },

  async down (queryInterface) {
    await queryInterface.removeColumn(ASSET_TABLE, 'employee_id');
  }
};
