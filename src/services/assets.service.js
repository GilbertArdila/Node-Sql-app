const boom = require('@hapi/boom');

//this models was created by default in libs/sequelize
const { models } = require('../libs/sequelize');

class AssetsService {
  constructor() {}

async create(data){
  const newAsset = await models.Asset.create(data);
  return newAsset;
}

async find(){
  const assets = await models.Asset.findAll();

  return assets;
}

async findOne(id){
  const asset = await models.Asset.findByPk(id);
  if(!asset){
    throw boom.notFound('Activo no existe');
  }else{
    return asset;
  }
}

async update(id,data){
  const asset = await this.findOne(id);
  if(asset){
    const rta = await asset.update(data);
    return rta;
  }
  }

  async delete(id){
    const asset = await this.findOne(id);
  if(asset){
    await asset.destroy(id);
    return id;
  }
}


}
module.exports = AssetsService;
