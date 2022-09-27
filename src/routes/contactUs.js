const contactUs = require('express').Router();
const rules = require('../middleware/contactUsRules')
const validation = require('../middleware/validation')
const contactUsController = require('../controllers/contactUs')

// Contact Us

// Get
contactUs.get('/', contactUsController.getDataContactUs)

// Post
contactUs.post('/', contactUsController.createContactUs)

module.exports = contactUs;