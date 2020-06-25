const mysql = require('mysql');
const model = require('./model.js');

module.exports = {
  getPhotos: (req, res) => {
    model.getPhotos((err, data) => {
      if (err) {
        console.log('Server get photos FAIL');
        res.status(400).send(err);
      } else {
        console.log('Server get photos SUCCESS');
        res.status(201).send(data);
      }
    });
  },
  getReviews: (req, res) => {
    model.getReviews((err, data) => {
      if (err) {
        console.log('Server get reviews FAIL');
        res.status(400).send(err);
      } else {
        console.log('Server get reviews SUCCESS');
        res.status(201).send(data);
      }
    });
  }
};