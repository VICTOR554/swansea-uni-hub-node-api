const express = require('express');
const router = express.Router()
const handlers = require('./building.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');


router.get('/', advancedResults(model.Building), handlers.getAllBuildings)
router.get('/:id', handlers.getOneBuilding)



module.exports = router;