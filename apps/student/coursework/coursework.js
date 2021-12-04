const express = require('express');
const router = express.Router()
const handlers = require('./coursework.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Coursework), handlers.getAllCourseworks)
router.get('/:id', handlers.getOneCoursework)



module.exports = router;