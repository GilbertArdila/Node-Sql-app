const { DataTypes,Model,Sequelize} = require('sequelize');

const EMPLOYEE_TABLE ='employees';

const EmployeeSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type :DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type :DataTypes.STRING
  },
  lastName:{
    allowNull: false,
    type :DataTypes.STRING,
    field:'last_name'
  },
   rol:{
    allowNull: false,
    type :DataTypes.STRING,
    defaultValue: 'user'
  },
  createdAt:{
    allowNull: false,
    type :DataTypes.DATE,
    field:'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Employee extends Model{
  //defining relationships
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: EMPLOYEE_TABLE,
      modelName: 'Employee',
      timestmaps: false
    }
  }
}

module.exports = {EMPLOYEE_TABLE,EmployeeSchema,Employee};
