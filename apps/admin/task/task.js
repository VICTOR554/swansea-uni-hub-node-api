const express = require('express');
const router = express.Router()
const handlers = require('./task.handlers');


router.get('/', handlers.getAllTasks)
router.get('/:id', handlers.getOneTask)
router.post('/new', handlers.createTasks)
router.put('/update/:id', handlers.updateTask)
router.delete('/delete/:id', handlers.deleteTask)


module.exports = router;