const express = require('express');
const router = express.Router()
const handlers = require('./coursework.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

// router.get('/', advancedResults(model.Coursework), handlers.getAllCourseworks)
router.get('/current', handlers.getCurrentCoursework)
router.get('/past', handlers.getPastCoursework)
router.get('/one/:id', handlers.getOneCoursework)



module.exports = router;