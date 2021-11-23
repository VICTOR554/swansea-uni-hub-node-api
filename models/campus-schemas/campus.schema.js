const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campusSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
});

module.exports = campusSchema;
