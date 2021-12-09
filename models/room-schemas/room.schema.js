const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  building_name: {
    type: String,
    required: true
  }
});

module.exports = roomSchema;
