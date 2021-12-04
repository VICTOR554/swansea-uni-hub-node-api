const express = require('express');
const router = express.Router()
const handlers = require('./finance.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Finance), handlers.getAllFinances)
router.get('/:id', handlers.getOneFinance)


module.exports = router;