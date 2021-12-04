const express = require('express');
const router = express.Router()
const handlers = require('./campus.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');


router.get('/', advancedResults(model.Campus), handlers.getAllCampuses)
router.get('/:id', handlers.getOneCampus)



module.exports = router;