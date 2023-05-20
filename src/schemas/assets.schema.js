const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3);
const description = Joi.string().max(100);
const quantity = Joi.number().min(1);
const ubication = Joi.string();
const purchaseDate = Joi.date();
const state = Joi.string();

const getAssetSchema = Joi.object({
  id: id.required(),
});

const createAssetSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  quantity: quantity.required(),
  ubication: ubication.required(),
  purchaseDate: purchaseDate,
  state: state,
});

const updateAssetSchema = Joi.object({
  name: name,
  description: description,
  quantity: quantity,
  ubication: ubication,
  purchaseDate: purchaseDate,
  state: state,
});
module.exports = { createAssetSchema, updateAssetSchema, getAssetSchema };
