const mysql = require('mysql');
const db = require('../db/index.js');

module.exports = {
  getPhotos: callback => {
    let queryStr = 'SELECT * FROM photos';
    db.connection.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  getReviews: callback => {
    let queryStr = 'SELECT * FROM header';
    db.connection.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
};