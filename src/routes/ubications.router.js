const express = require('express');
const UbicationsService = require('../services/ubications.service');

const router = express.Router();
const service = new UbicationsService();

router.get('/', async (req, res, next) => {
  try {
    const ubications = await service.find();
    res.status(200).json(ubications);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const ubication = await service.findOne(id);
      res.status(200).json(ubication);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUbication = await service.create(body);
      res.status(201).json(newUbication);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const ubication = await service.update(id, body);

      res.status(201).json(ubication);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.status(204).json(rta);
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router;
