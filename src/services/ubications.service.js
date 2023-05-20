const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UbicationsService {
  constructor() {}

  async create(data) {
    const newUbication = await models.Ubication.create(data);
    return newUbication;
  }

  async find() {
    const ubications = await models.Ubication.findAll();

    return ubications;
  }

  async findOne(id) {
    const ubication = await models.Ubication.findByPk(id);
    if (!ubication) {
      throw boom.notFound('La ubicación que buscas no existe');
    } else {
      return ubication;
    }
  }

  async update(id, data) {
    const ubication = await this.findOne(id);
    if (ubication) {
      const rta = await ubication.update(data);
      return rta;
    }
  }

  async delete(id) {
    const ubication = await this.findOne(id);
    if (ubication) {
      await ubication.destroy(id);
      return id;
    }
  }
}
module.exports = UbicationsService;
