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
        enum: ['male', 'female', 'other'],
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
        enum: ['bay', 'singleton'],
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        enum: ['bachelor', 'master', 'Phd'],
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
                type: Number,
                required: true
            },
            payment: [{
                type: Number,
            }],
        },
        accomodation: {
            initial: {
                type: Number,
                required: true
            },
            payment: [{
                type: Number,
            }],
        },
    },
    address: {
        type: String,
        // required: true
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