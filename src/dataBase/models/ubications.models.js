const { DataTypes,Model,Sequelize} = require('sequelize');

const UBICATION_TABLE ='ubications';

const UbicationSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type :DataTypes.INTEGER
  },
  identification:{
    allowNull: false,
    type :DataTypes.STRING
  },
  isEmpty:{
    allowNull: false,
    type :DataTypes.BOOLEAN,
    field:'is_empty',
    defaultValue:true
  },
  createdAt:{
    allowNull: false,
    type :DataTypes.DATE,
    field:'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt:{
    allowNull: false,
    type :DataTypes.DATE,
    field:'updated_at',
    defaultValue: Sequelize.NOW
  }
}

class Ubication extends Model{
  //defining relationships,
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: UBICATION_TABLE,
      modelName: 'Ubication',
      timestmaps: false
    }
  }
}

module.exports = {UBICATION_TABLE,UbicationSchema,Ubication};
