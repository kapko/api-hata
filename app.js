const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const os = require('os');

const routes = {};
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

require('fs').readdirSync(__dirname + '/routes').forEach(fileName => {
  let variables = fileName.split('.js')[0],
    routerName = (variables === 'index') ? '/' : `/${variables}`;
  // init all routers
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
