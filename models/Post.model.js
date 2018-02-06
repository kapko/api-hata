var mongoose = require('mongoose');

module.exports = mongoose.model('Post', new mongoose.Schema({
  title: String,
  description: String,
}));
