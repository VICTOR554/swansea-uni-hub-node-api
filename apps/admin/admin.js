const express = require('express')
const router = express.Router()


const student = require('./student/student');

router.use('/students', student);

module.exports = router