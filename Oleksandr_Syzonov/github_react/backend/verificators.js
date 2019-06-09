const Joi = require("joi");

const file_scheme = Joi.object().keys({
  name: Joi.string().required(),
  is_directory: Joi.boolean().required(),
  latest_commit_text: Joi.string().required(),
  latest_commit_time: Joi.string().required(),
  id: Joi.number()
    .integer()
    .required(),
  parent_id: Joi.number()
    .integer()
    .required()
});
const schema = Joi.object().keys({
  name: Joi.string()
    .alphanum()
    .required(),
  full_name: Joi.string()
    .regex(/.*\/.*/)
    .required(),
  owner_id: Joi.number()
    .integer()
    .required(),
  description: Joi.string().required(),
  topics: Joi.array().items(Joi.string()),
  files: Joi.array().items(file_scheme)
});

const repository_validator = data => Joi.validate(data, schema).error === null;
module.exports = {
  repository_validator
};
