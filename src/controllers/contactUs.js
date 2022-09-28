const response = require('../helpers/standardResponse');
const {LIMIT_DATA} = process.env
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
  const {keyword = '', searchBy = 'name', sortBy = 'id', sortType='ASC', limit = parseInt(LIMIT_DATA), page = 1} = req.query;
  const offset = (page - 1) * limit;
  
  contactUsModel.getDataContactUs(searchBy, keyword, sortBy, sortType, limit, offset, (err, results) => {
    if (results.length < 1) {
      return res.redirect('/404');
    }
    const pageInfo = {};
    contactUsModel.countAllDataContactUs(searchBy, keyword, (err, totalData) => {
      pageInfo.totalData = totalData;
      pageInfo.totalPage = Math.ceil(totalData / limit);
      pageInfo.currentPage = parseInt(page);
      pageInfo.nextPage = pageInfo.currentPage < pageInfo.totalPage ? pageInfo.currentPage + 1 : null;
      pageInfo.prevPage = pageInfo.currentPage > 1 ? pageInfo.currentPage - 1 : null;
      return response(res, 'List All Contact Us', results, pageInfo);
    })
  });
};

exports.deleteDataContactUs = (req, res) => {
  const {id} = req.params;
  contactUsModel.deleteDataContactUs(id, (results) => {
    return response(res, 'Data deleted!', results[0]);
  });
};