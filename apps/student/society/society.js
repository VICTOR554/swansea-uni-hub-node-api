const express = require('express');
const router = express.Router()
const handlers = require('./society.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Society), handlers.getAllSocieties)
router.get('/:id', handlers.getOneSociety)



module.exports = router;