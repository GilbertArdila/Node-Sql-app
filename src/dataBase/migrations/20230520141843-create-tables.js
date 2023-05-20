'use strict';
const { AssetSchema, ASSET_TABLE } = require('../models/assets.model');
const { EmployeeSchema, EMPLOYEE_TABLE } = require('../models/employees.model');
const {
  UbicationSchema,
  UBICATION_TABLE,
} = require('../models/ubications.models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

     await queryInterface.createTable(ASSET_TABLE,AssetSchema);
     await queryInterface.createTable(EMPLOYEE_TABLE,EmployeeSchema);
     await queryInterface.createTable(UBICATION_TABLE,UbicationSchema);


  },

  async down(queryInterface) {

      await queryInterface.dropTable(ASSET_TABLE);
      await queryInterface.dropTable(EMPLOYEE_TABLE);
      await queryInterface.dropTable(UBICATION_TABLE);

  },
};
