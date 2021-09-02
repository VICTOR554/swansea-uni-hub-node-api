const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    moduleCode: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    dueDate: {
        type: Number,
        required: true
    },
    initialDate: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        //required: true
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
    },
    studentNumber:{
        type: Number,
        required: true
    }
})

module.exports = taskSchema