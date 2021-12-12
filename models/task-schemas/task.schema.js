const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  studentNumber: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  moduleCode: {
    type: String
  },
  createdDateTime: {
    type: Number,
    required: true
  },
  dueDateTime_time: {
    type: Number,
    required: true
  },
  flagged: {
    type: Boolean,
    required: true,
    default: false
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
);

// Reverse populate with virtuals
taskSchema.virtual('student', {
ref: 'Student',
localField: 'studentNumber',
foreignField: 'number',
justOne: false
});

module.exports = taskSchema;
