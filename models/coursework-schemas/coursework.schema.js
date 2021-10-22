const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseWorkSchema = new Schema({
    moduleCode: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    lecturerName: {
        type: String,
        required: true
    },
    dueDate: {
        type: Number,
        required: true
    },
    status: {
        type: string,
        required: true,
        enum: ['Current', 'Past'],
    },
    percentage: {
        type: Number,
    },
})


module.exports = courseWorkSchema;