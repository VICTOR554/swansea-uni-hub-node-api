const express = require('express');
const router = express.Router()
const handlers = require('./session.handlers');


router.get('/', handlers.getAllSessions)
router.get('/:id', handlers.getOneSession)
router.post('/new', handlers.createSessions)
router.put('/update/:id', handlers.updateSession)
router.delete('/delete/:id', handlers.deleteSession)


module.exports = router;