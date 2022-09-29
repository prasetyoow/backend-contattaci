const e = require('express');
const db = require('../helpers/db')
const {LIMIT_DATA} = process.env

exports.createContactUs = (data, cb) => {
  const q = 'INSERT INTO contactus (name, email, phone_number, message) VALUES ($1, $2, $3, $4) RETURNING *'
  const value = [data.name, data.email, data.phone_number, data.message];
  db.query(q, value, (err, res) => {
    if (res) {
      cb(err, res.rows);
    } else {
      cb(err);
    }
  });
};

exports.getDataContactUs = (searchBy, keyword, sortBy, sortType, limit = parseInt(LIMIT_DATA), offset = 0, cb) => {
  const q = `SELECT * FROM contactus WHERE ${searchBy} ILIKE '%${keyword}%' ORDER BY ${sortBy} ${sortType} LIMIT $1 OFFSET $2`;
  const val = [limit, offset];
  db.query(q, val, (err, res) => {
    if (res) {
      cb(err, res.rows);
    } else {
      cb(err)
    }
  });
}

exports.countAllDataContactUs = (searchBy, keyword, cb) => {
  db.query(`SELECT * FROM contactus WHERE ${searchBy} ILIKE '%${keyword}%'`, (err, res) => {
    cb(err, res.rowCount);
  })  
}

exports.getDataContactUsById = (id, cb) => {
  const query = ('SELECT * FROM contactus WHERE id=$1')
  const value = [id]
  db.query(query, value, (err, res) => {
    cb(err, res.rows)
  })
}

exports.editDataContactUs = (id, data, cb) => {
  const query = 'UPDATE contactus SET name=$2, email=$3, message=$4 WHERE id=$1 RETURNING *';
  const value = [id, data.name, data.email, data.message]
  db.query(query, value, (err, res) => {
    cb(err, res.rows)
  })
}

exports.deleteDataContactUs = (id, cb) => {
  const query = 'DELETE FROM contactus WHERE id=$1 RETURNING *';
  const value = [id];
  db.query(query, value, (err, res) => {
    cb(res.rows);
  });
};