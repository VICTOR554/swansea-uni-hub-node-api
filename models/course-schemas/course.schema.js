const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['bachelor', 'masters', 'Phd'],
    required: true
  }
});

module.exports = courseSchema;
