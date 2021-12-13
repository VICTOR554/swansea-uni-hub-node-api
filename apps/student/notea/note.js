const express = require('express');
const router = express.Router()
const handlers = require('./note.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/all/', advancedResults(model.Note), handlers.getAllNotes)
router.get('/one/:id', handlers.getOneNote)
router.post('/new', handlers.createNotes)
router.put('/update/:id', handlers.updateNote)
router.delete('/delete/:id', handlers.deleteNote)


module.exports = router;