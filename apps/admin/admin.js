const express = require('express')
const router = express.Router()


const student = require('./student/student');
const modules = require('./module/module')




router.use('/students', student);
router.use('/module', modules)

module.exports = router;