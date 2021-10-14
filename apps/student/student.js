const express = require('express')
const router = express.Router()

const handlers = require('./student.handlers');


router.get('/:id', handlers.getStudent)
router.put('/update/:id', handlers.updateStudent)