const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = {};
// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// init all routes
require('fs').readdirSync(__dirname + '/routes').forEach(fileName => {
  let variables = fileName.split('.js')[0],
    routerName = (variables === 'index') ? '/' : `/${variables}`;

  routes[routerName] = require(__dirname + '/routes/' + fileName);
});

for (let routerName in routes) {
  app.use(routerName, routes[routerName]);
}

// load mongoose package
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo')
  .then(() =>  console.log('DB. connection succesful'))
  .catch((err) => console.error(err));

app.listen('3000', (req, res) => console.log('Port:3000'));


// const sharp = require('sharp');
// sharp('./1.jpg')
//   .rotate()
//   .resize(300, 450)
//   .toFile('ouput.jpg', err => console.log('err', err));