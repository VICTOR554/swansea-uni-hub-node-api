const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  moduleCode: {
    type: String,
    required: true
  },
  lecturerName: {
    type: String,
    required: true
  },
  startDateTime: {
    type: Number,
    required: true
  },
  endDateTime: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Lecture', 'Seminar', 'Lab', 'Exam', 'Lecture/Seminar', 'Revision'],
    required: true
  }
});

activitySchema.index({ moduleCode: 1, startDateTime: 1}, { unique: true })
activitySchema.index({ moduleCode: 1, startDateTime: 1, type: 1}, { unique: true })
activitySchema.index({ startDateTime: 1, lecturer_number: 1}, { unique: true })
activitySchema.index({ startDateTime: 1, location: 1}, { unique: true })

activitySchema.index({ moduleCode: 1, endDateTime: 1}, { unique: true })
activitySchema.index({ moduleCode: 1, endDateTime: 1, type: 1}, { unique: true })
activitySchema.index({ endDateTime: 1, lecturer_number: 1}, { unique: true })
activitySchema.index({ endDateTime: 1, location: 1}, { unique: true })


module.exports = activitySchema;
