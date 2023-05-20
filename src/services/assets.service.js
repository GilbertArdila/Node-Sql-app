const boom = require('@hapi/boom');
const { Op } = require("sequelize");

const { models } = require('../libs/sequelize');

class AssetsService {
  constructor() {}

  async create(data) {
    const newUser = await models.Asset.create(data);
    return newUser;
  }

  async find() {
     const assets = await models.Asset.findAll({
      include:['employee']
     });
     return assets;
  }
  //find by Depreciado
  async findByState(){
    const assets = await models.Asset.findAll({
      where:{
        state:{
          [Op.not]:'Activo'
        }
      }
    });
    return assets;
  }
  //find by quantity
  async findByQuantity(){
    const assets = await models.Asset.findAll({
      where:{
        quantity:{
          [Op.gt]:0
        }
      }
    });
    return assets;
  }
  async findOne(id) {
    const asset = await models.Asset.findByPk(id);
    if (!asset) {
      throw boom.notFound('Activo no existe');
    }else{
      return asset;
    }
  }

  async update(id, data) {
    const asset = await models.Asset.findByPk(id);
    if(!asset){
      throw boom.notFound('Activo no existe');
    }else{
      const rta = await asset.update(data);
      return rta;
    }
  }

  async delete(id) {
    const asset = await models.Asset.findByPk(id);
    if(!asset){
      throw boom.notFound('Activo no existe');
    }else{
      await asset.destroy();
    return { id };
    }

  }
}

module.exports = AssetsService;
