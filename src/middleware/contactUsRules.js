const {body} = require('express-validator');

const contactUs = [
  body('name'),
  body('email').isEmail().withMessage('Email format is Invalid'),
  body('message'),
];

module.exports = contactUs;