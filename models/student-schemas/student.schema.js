const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    number: {
        type: Number,
        unique: true,
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
        // required: true
    },
    telephone: {
        type: String,
        // required: true
    },
    email:{
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    homeCampus: {
        type: String,
        enum: ['bay', 'singleton'],
        // required: true,
    },
    department: {
        type: String,
        // required: true,
    },
    degree: {
        type: String,
        enum: ['bachelor', 'master', 'Phd'],
        // required: true
    },
    duration: {
        startTime: {
            type: String,
            // required: true
        },
        endTime:{
            type: String,
            // required: true
        },
    },
    courseId: {
        type: Number,
        // required: true
    },
    finance: {
        type: Number,
        // required: true
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
        // required: true
    }]

})



module.exports =  studentSchema;