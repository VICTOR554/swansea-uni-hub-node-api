const express = require('express');
const router = express.Router()
const handlers = require('./event.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Event), handlers.getAllEvents)
router.get('/:id', handlers.getOneEvent)



module.exports = router;