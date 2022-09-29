const contactUs = require('express').Router();
const rules = require('../middleware/contactUsRules')
const validation = require('../middleware/validation')
const contactUsController = require('../controllers/contactUs')

// Contact Us

// Get
contactUs.get('/', contactUsController.getDataContactUs)

// Post
contactUs.post('/', ...rules, validation, contactUsController.createContactUs)

// Patch
contactUs.patch('/:id', ...rules, validation, contactUsController.editDataContactUs)
contactUs.get('/:id', contactUsController.getDataContactUsById)

// Delete
contactUs.delete('/:id', contactUsController.deleteDataContactUs)

module.exports = contactUs;