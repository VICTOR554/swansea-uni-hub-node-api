const express = require('express');
const router = express.Router()
const handlers = require('./task.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Task, 'student'), handlers.getAllTasks)
router.get('/:id', handlers.getOneTask)
router.post('/new', handlers.createTasks)
router.put('/update/:id', handlers.updateTask)
router.delete('/delete/:id', handlers.deleteTask)


module.exports = router;