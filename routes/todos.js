var express = require('express');
var router = express.Router();

var Todo = require('../models/Todo.js');

/* GET /todos listing. */
router.get('/', function(req, res) {
  let notes = [];
  let data = {};

  if (req.query.note) {
    if (typeof req.query.note !== 'string') {
      req.query.note.forEach(noteItem => notes.push(noteItem));
    } else {
      notes.push(req.query.note);
    }

    delete req.query.note;
    req.query.note = {$all: notes};
  }

  Todo.count(req.query, (err, count) => {
    data['count'] = count;
  });

  Todo.find(req.query, (err, todos) => {
    if (err) return err;
    data['data'] = todos;
    res.json(data);
  });
});

/* POST /todos */
router.post('/', function(req, res) {
  Todo.create(req.body, function (err, post) {
    if (err) return err;
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
