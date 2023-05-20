const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const rol= Joi.string();


const getEmployeeSchema = Joi.object({
  id: id.required(),
});

const createEmployeeSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  rol: rol,

});

const updateEmployeeSchema = Joi.object({
  name: name,
  lastName: lastName,
  rol: rol
});
module.exports = { createEmployeeSchema, updateEmployeeSchema, getEmployeeSchema };
