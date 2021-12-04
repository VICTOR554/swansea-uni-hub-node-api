const express = require('express');
const router = express.Router()
const handlers = require('./session.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Session), handlers.getAllSessions)
router.get('/:id', handlers.getOneSession)
router.post('/new', handlers.createSessions)
router.put('/update/:id', handlers.updateSession)
router.delete('/delete/:id', handlers.deleteSession)


module.exports = router;