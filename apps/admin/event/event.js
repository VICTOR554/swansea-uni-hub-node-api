const express = require('express');
const router = express.Router()
const handlers = require('./event.handlers');


router.get('/', handlers.getAllEvents)
router.get('/:id', handlers.getOneEvent)
router.post('/new', handlers.createEvents)
router.put('/update/:id', handlers.updateEvent)
router.delete('/delete/:id', handlers.deleteEvent)


module.exports = router;