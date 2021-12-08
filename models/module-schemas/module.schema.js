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
  course_code: {
    type: String,
    required: true
  }
});

moduleSchema.virtual('students', {
  localField: 'code',
  foreignField: 'module_code',
  justOne: false
})

module.exports = moduleSchema;
