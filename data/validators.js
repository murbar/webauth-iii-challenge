const Joi = require('joi');

const userSchema = {
  username: Joi.string()
    .label('Username')
    .alphanum()
    .min(3)
    .max(255)
    .required(),
  password: Joi.string()
    .label('Password')
    .min(6)
    .required(),
  department: Joi.string()
    .label('Department')
    .required()
};

module.exports = {
  userValidator: user => Joi.validate(user, userSchema)
};
