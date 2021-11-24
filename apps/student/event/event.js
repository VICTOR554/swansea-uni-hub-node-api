const express = require('express');
const router = express.Router()
const handlers = require('./event.handlers');


router.get('/', handlers.getAllEvents)
router.get('/:id', handlers.getOneEvent)



module.exports = router;