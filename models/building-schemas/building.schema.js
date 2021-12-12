const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingSchema = new Schema(
  {
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
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Reverse populate with virtuals
buildingSchema.virtual('rooms', {
  ref: 'Room',
  localField: 'name',
  foreignField: 'buildingName',
  justOne: false
});

module.exports = buildingSchema;
