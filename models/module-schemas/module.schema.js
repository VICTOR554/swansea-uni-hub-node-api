const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  code: 
    {
      type: String,
      required: true
    },
  name: {
    type: String,
    required: true
  },
  courseCode: {
    type: String,
    required: true
  }
});

moduleSchema.virtual('students', {
  localField: 'code',
  foreignField: 'moduleCode',
  justOne: false
})

module.exports = moduleSchema;
