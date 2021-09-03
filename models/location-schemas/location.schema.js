const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  campus: {
    type: String,
    enum: ['Bay', 'Singleton'],
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
  
});

module.exports = locationSchema;