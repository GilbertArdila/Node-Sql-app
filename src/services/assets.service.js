const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class AssetsService {
  constructor() {}

  async create(data) {
    const newUser = await models.Asset.create(data);
    return newUser;
  }

  async find() {
     const assets = await models.Asset.findAll();
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
