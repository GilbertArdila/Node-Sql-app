const express = require('express');

const EmployeeService = require('../services/employees.service');
const router = express.Router();
const service = new EmployeeService();

router.get('/', async (req, res, next) => {
  try {
    const employees = await service.find();
    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const employee = await service.findOne(id);
      res.status(200).json(employee);
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
      const newEmployee = await service.create(body);
      res.status(201).json(newEmployee);
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
      const employee = await service.update(id, body);

      res.status(201).json(employee);
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
