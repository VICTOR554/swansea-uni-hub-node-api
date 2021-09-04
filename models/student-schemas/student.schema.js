const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'other'],
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    homeCampus: {
        type: String,
        enum: ['Bay', 'Singleton'],
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        enum: ['Foundation', 'A-level', 'First year', 'Second year', 'Third year', 'Master', 'Phd'],
        required: true
    },
    duration: {
        startTime: {
            type: Number,
            required: true
        },
        endTime:{
            type: Number,
            required: true
        },
    },
    course: {
        type: Number,
        required: true
    },
    finance: {
        tuition: {
            initial: {
                type: String,
                required: true
            },
            payment: [{
                type: Number,
            }],
        },
        accomodation: {
            initial: {
                type: String,
            },
            payment: [{
                type: Number,
            }],
        },
    },
    address: {
        type: String,
        required: true
    },
    specialism: {
        type: String,
    },
    modules: [{
        type: String,
        required: true
    }]

})



module.exports = studentSchema