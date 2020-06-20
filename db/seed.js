const faker = require('faker');
const mysql = require('mysql');
const db = require('./index.js');

for (var i = 0; i < 71; i++) {
  let imageUrl = 'https://appbnb.s3-us-west-1.amazonaws.com/' + `image${i}` + '.jpg';
  let description = faker.lorem.sentence();

  let queryStr = `INSERT INTO photos (url, description) VALUES ('${imageUrl}', '${description}')`;

  db.connection.query(queryStr, (err, result) => {
    if (err) {
      throw(err);
    } else {
      console.log('Inserted');
    }
  });
}

db.connection.end();