const express = require('express');
const router = express.Router()
const handlers = require('./week.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Week), handlers.getAllWeeks)
router.get('/:id', handlers.getOneWeek)
router.get('/number/:number', handlers.getOneWeekByNumber)
router.get('/date/:date', handlers.getOneWeekByDate)


module.exports = router;