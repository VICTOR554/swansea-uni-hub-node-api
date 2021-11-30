const express = require('express');
const router = express.Router()
const handlers = require('./student.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');



router.get('/', advancedResults(model.Student), handlers.getAllStudents)
router.get('/:id', handlers.getOneStudent)
router.post('/new', handlers.createStudents)
router.put('/update/:id', handlers.updateStudent)
router.delete('/delete/:id', handlers.deleteStudent)


module.exports = router;