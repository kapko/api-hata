const express = require('express');
const bodyParser = require('body-parser');
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
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://localhost/todo')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.listen('3000', (req, res) => console.log('port is 3000'));
2