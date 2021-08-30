const express = require('express');
const router = express.Router()
const handlers = require('./student.handlers');


router.get('/', handlers.getAllStudents)
router.get('/:id', handlers.getOneStudent)
router.post('/new', handlers.createStudents)
router.put('/edit/:number', handlers.updateStudent)


module.exports = router;