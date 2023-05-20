const express = require('express')

const assetsRouter = require('./assets.router');
const employeesRouter = require('./employees.router');
const ubicationsRouter = require('./ubications.router');


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router)
  router.use('/activos',assetsRouter);
  router.use('/empleados',employeesRouter);
  router.use('/ubicaciones',ubicationsRouter);
}

module.exports = routerApi;
