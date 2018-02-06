var mongoose = require('mongoose');
var errMessage = require('../configs/err.message');

module.exports = mongoose.model('Post', new mongoose.Schema({
  account_type: {
    type: String,
    enum: ['owner', 'agent'],
    required: [true, errMessage.required]
  },
  selling_type: {
    type: String,
    enum: ['rent', 'sell'],
    required: [true, errMessage.required]
  },
  for_sell: {
    type: String,
    enum: ['room', 'area', 'house', 'camp', 'office', 'business', 'other', 'forShortTime'],
    required: [true, errMessage.required]
  },
  room_type: {
    type: String,
    enum: ['elite', '105', '104', '106', 'old', 'pso'],
  },
  address: {
    type: String,
    required: true,
  },
  flat_count: {
    type: String,
  },
  area: {
    type: String,
  },
  area_of_house: {
    type: String,
  },
  type_of_sale: {
    type: [String],
    enum: ['ipoteka', 'rassrochka', 'slowly', 'torg'],
    require: true,
  },
  floor: {
    type: String,
    require: true,
  },
  floor_of: {
    type: String,
  },
  price: {
    type: String,
    require: true,
  },
  fixes: {
    type: String,
    enum: ['euro', 'design', 'none', 'simple'],
    require: true,
  },
  currency: {
    type: String,
    enum: ['dollar', 'euro', 'som'],
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  whatsapp: {
    type: Number,
  },
  extraPhone: {
    type: Number,
  },
  images: {
    type: [String],
    require: true,
  },
  tumbnails: {
    type: [String],
  },
  lat: {
    type: Number,
    require: true,
  },
  lng: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    required: [true, errMessage.required]
  },
}, { timestamps: { createdAt: 'created_at' } }));
