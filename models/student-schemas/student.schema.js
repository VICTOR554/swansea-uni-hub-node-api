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
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    course: {
        type: Number,
        required: true
    },
    degree: {
        type: String,
        enum: ['Foundation', 'A-level', 'First year', 'Second year', 'Third year', 'Master', 'Phd'],
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
                required: true
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