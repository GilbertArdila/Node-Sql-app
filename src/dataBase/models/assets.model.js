const { DataTypes,Model,Sequelize} = require('sequelize');

const ASSET_TABLE ='assets';

const AssetSchema = {
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
  description:{
    allowNull: false,
    type :DataTypes.TEXT
  },
  quantity:{
    allowNull: false,
    type :DataTypes.INTEGER
  },
  ubication:{
    allowNull: false,
    type :DataTypes.STRING

  },
  purchaseDate:{
    allowNull: false,
    type :DataTypes.DATE,
    field:'purchase_date',
    defaultValue: Sequelize.NOW
  },
  state:{
    allowNull: false,
    type :DataTypes.STRING,
    defaultValue: 'Activo'
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

class Asset extends Model{
  //defining relationships
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ASSET_TABLE,
      modelName: 'Asset',
      timestmaps: false
    }
  }
}

module.exports = {ASSET_TABLE,AssetSchema,Asset};
