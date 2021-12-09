const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  name: {
    type: String,
    required: true

  },
  campus_name: {
    type: String,
    enum: ['Bay', 'Singleton'],
    required: true
  },
  availableToBooking: {
    type: Boolean,
    required: true
  },
});

module.exports = buildingSchema;
