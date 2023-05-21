const { Sequelize } = require('sequelize');

const { config } = require('../../src/config/config');
const setupModels = require('../dataBase/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `postgres://postgres:AKF6UqYJgFkAj9BnDXnT@AKF6UqYJgFkAj9BnDXnT:7104/railway`;
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

//sendind connection to sertupModels
setupModels(sequelize);


module.exports = sequelize;
