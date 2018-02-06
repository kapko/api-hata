var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  note: {
    type: [String],
    enum: ['one', 'two', 'three'],
    required: true
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
