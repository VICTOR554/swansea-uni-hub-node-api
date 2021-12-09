const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  buildingName: {
    type: String,
    required: true
  }
});

module.exports = roomSchema;
