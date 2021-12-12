const express = require('express');
const router = express.Router()
const handlers = require('./module.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');


router.get('/', advancedResults(model.Module), handlers.getAllModules)
router.get('/:code', handlers.getOneModule)



module.exports = router;