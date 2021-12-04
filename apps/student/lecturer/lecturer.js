const express = require('express');
const router = express.Router()
const handlers = require('./lecturer.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Lecturer), handlers.getAllLecturers)
router.get('/:id', handlers.getOneLecturer)



module.exports = router;