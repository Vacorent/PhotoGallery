const mysql = require('mysql');
const db = require('../db/index.js');

module.exports = {
  getPhotos: callback => {
    let queryStr = 'SELECT * FROM photos';
    db.connection.query(queryStr, (err, data) => {
      if (err) {
        console.log('Database Query FAIL');
        callback(err);
      } else {
        console.log('Database Query SUCCESS');
        callback(null, data);
      }
    });
  }
};