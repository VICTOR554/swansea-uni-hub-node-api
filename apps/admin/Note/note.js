const express = require('express');
const router = express.Router()
const handlers = require('./note.handlers');


router.get('/', handlers.getAllNotes)
router.get('/:id', handlers.getOneNote)
router.post('/new', handlers.createNotes)
router.put('/update/:id', handlers.updateNote)
router.delete('/delete/:id', handlers.deleteNote)


module.exports = router;