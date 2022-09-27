const response = require('../helpers/standardResponse');

const contactUsModel = require('../models/contactUs');

exports.createContactUs = (req, res) => {
  contactUsModel.createContactUs(req.body, (err, results) => {
    if (err) {
      return response(res, `Failed to send ${err.message}`, null, null, 400);
    } else {
      return response(res, 'Successfully send your message', results[0]);
    }    
  });
};

exports.getDataContactUs = (req, res) => {
  contactUsModel.getDataContactUs((err, results) => {
    return response(res, 'List All Contact Us', results);
  });
};