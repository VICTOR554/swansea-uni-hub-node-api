const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseWorkSchema = new Schema({
    moduleCode: {
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
    percentage: {
        type: Number,
    },
})


module.exports = courseWorkSchema;