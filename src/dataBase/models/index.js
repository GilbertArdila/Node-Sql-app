const { AssetSchema, Asset } = require('./assets.model');
const { EmployeeSchema, Employee } = require('./employees.model');
const { UbicationSchema, Ubication } = require('./ubications.models');

function setupModels(sequelize){
  Asset.init(AssetSchema,Asset.config(sequelize));
  Employee.init(EmployeeSchema,Employee.config(sequelize));
  Ubication.init(UbicationSchema,Ubication.config(sequelize));
}

module.exports = setupModels;
