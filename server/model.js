const mysql = require('mysql');
const db = require('../db/index.js');

module.exports = {
  getPhotos: callback => {
    let queryStr = 'SELECT * FROM photos';
    db.connection.query(queryStr, (err, data) => {
      if (err) {
        console.log('Photos Query FAIL');
        callback(err);
      } else {
        console.log('Photos Query SUCCESS');
        callback(null, data);
      }
    });
  },
  getReviews: callback => {
    let queryStr = 'SELECT * FROM header';
    db.connection.query(queryStr, (err, data) => {
      if (err) {
        console.log('Reviews Query FAIL');
      } else {
        console.log('Reviews Query FAIL');
        callback(null, data);
      }
    });
  }
};