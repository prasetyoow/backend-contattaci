const {body} = require('express-validator');

const contactUs = [
  body('name').isLength({min: 4}).withMessage('Name length must be atleast 4 characters'),
  body('email').isEmail().withMessage('Email format is Invalid'),
  body('message').isLength({max: 255}).withMessage('Message length must be within 255 characters')
];

module.exports = contactUs;