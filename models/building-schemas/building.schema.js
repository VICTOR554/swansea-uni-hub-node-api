const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  campus_name: {
    type: String
  },
  name: {
    type: String,
    required: true

  },
  location: {
    type: String,
    required: true
  }
});

module.exports = buildingSchema;
