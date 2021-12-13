const express = require('express');
const router = express.Router()
const handlers = require('./task.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/all/', advancedResults(model.Task), handlers.getAllTasks)
router.get('/overdue', handlers.getOverdueTasks)
router.get('/inprogress', handlers.getInprogressTasks)
router.get('/completed', handlers.getCompletedTasks)
router.get('/flagged', handlers.getFlaggedTasks)
router.get('/one/:id', handlers.getOneTask)
router.post('/new', handlers.createTasks)
router.put('/update/:id', handlers.updateTask)
router.delete('/delete/:id', handlers.deleteTask)


module.exports = router;