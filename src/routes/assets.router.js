const express = require('express');

const AssetsService = require('../services/assets.service');
//to validate schemas
const validatorHandler = require('../middlewares/validator.handler');
const {
  createAssetSchema,
  updateAssetSchema,
  getAssetSchema,
} = require('./../schemas/assets.schema');

const router = express.Router();
const service = new AssetsService();

router.get('/', async (req, res, next) => {
  try {
    const assets =await service.find();
    res.status(200).json(assets);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getAssetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const asset =await service.findOne(id);
      res.status(200).json(asset);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createAssetSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAsset =await service.create(body);
      res.status(201).json(newAsset);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getAssetSchema, 'params'),
  validatorHandler(updateAssetSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const asset =await service.update(id, body);

      res.status(201).json(asset);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getAssetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta =await service.delete(id);
      res.status(204).json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
