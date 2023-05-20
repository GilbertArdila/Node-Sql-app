const express = require('express')

const assetsRouter = require('./assets.router');


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router)
  router.use('/activos',assetsRouter);
}

module.exports = routerApi;
