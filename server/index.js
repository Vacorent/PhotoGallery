const controller = require('./controller.js');
const express = require('express');
const Parser = require('body-parser');
const path = require('path');
const app = express();
const port = 3002;

app.use(Parser.urlencoded({extended: true}));
app.use(Parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/api/photos', (req, res) => controller.getPhotos(req, res));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
