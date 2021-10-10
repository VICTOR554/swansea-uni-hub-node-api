const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
    moduleCode: {
        type: String,
        required: true
    },
    lecturerName: {
        type: String,
        required: true
    },
    startTime: {
        type: Number,
        required: true
    },
    endTime:{
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
    },
})


module.exports = activitySchema;