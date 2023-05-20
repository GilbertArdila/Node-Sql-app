const Joi = require('joi');

const id = Joi.string();
const identification = Joi.string();
const isEmpty = Joi.boolean();



const getUbicationSchema = Joi.object({
  id: id.required(),
});

const createUbicationSchema = Joi.object({
  identification: identification.required(),
  isEmpty: isEmpty,
});

const updateUbicationSchema = Joi.object({
  identification: identification,
  isEmpty: isEmpty,
});
module.exports = { createUbicationSchema, updateUbicationSchema, getUbicationSchema };
