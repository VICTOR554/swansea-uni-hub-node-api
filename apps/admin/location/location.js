const express = require('express');
const router = express.Router()
const handlers = require('./location.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Location), handlers.getAllLocations)
router.get('/:id', handlers.getOneLocation)
router.post('/new', handlers.createLocations)
router.put('/update/:id', handlers.updateLocation)
router.delete('/delete/:id', handlers.deleteLocation)


module.exports = router;