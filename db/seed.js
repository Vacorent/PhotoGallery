const faker = require('faker');
const mysql = require('mysql');
const db = require('./index.js');

for (var i = 1; i <= 72; i++) {
  let imageUrl = 'https://appbnb.s3-us-west-1.amazonaws.com/' + `image${i}` + '.jpg';
  let description = faker.lorem.sentence();

  let queryStr = `INSERT INTO photos (url, description) VALUES ('${imageUrl}', '${description}')`;

  db.connection.query(queryStr, (err, result) => {
    if (err) {
      throw(err);
    } else {
      console.log('Inserted image data');
    }
  });
}

for (let i = 0; i < 100; i++) {
  let title = faker.lorem.words();
  let avg = faker.random.number({min: 2.50, max: 5, precision:0.01});
  avg = avg.toFixed(2);
  let reviews = faker.random.number({min: 20, max: 1000});
  let city = faker.address.city();
  let state = faker.address.state();
  let country = faker.address.country();
  let superUser = faker.random.number({min: 0, max: 1});


  let queryStr = `INSERT INTO header (title, avg, reviews, city, state, country, superUser) VALUES ('${title}', ${avg}, ${reviews}, '${city}', '${state}', "${country}", ${superUser})`;

  db.connection.query(queryStr, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Inserted header data');
    }
  });
}

db.connection.end();