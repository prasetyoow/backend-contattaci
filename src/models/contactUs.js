const e = require('express');
const db = require('../helpers/db')

exports.createContactUs = (data, cb) => {
  const q = 'INSERT INTO contactus (name, email, message) VALUES ($1, $2, $3) RETURNING *'
  const value = [data.name, data.email, data.message];
  db.query(q, value, (err, res) => {
    if (res) {
      cb(err, res.rows);
    } else {
      cb(err);
    }
  });
};

exports.getDataContactUs = (cb) => {
  db.query('SELECT * FROM contactus ORDER BY id DESC', (err, res)=>{
      console.log(err);
      cb(err, res.rows);
  });
}