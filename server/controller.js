const mysql = require('mysql');
const model = require('./model.js');

module.exports = {
  getPhotos: (req, res) => {
    model.getPhotos((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },
  getReviews: (req, res) => {
    model.getReviews((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  }
};