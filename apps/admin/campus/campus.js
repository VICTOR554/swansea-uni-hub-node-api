const express = require('express');
const router = express.Router()
const handlers = require('./campus.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Campus), handlers.getAllCampuses)
router.get('/:id', handlers.getOneCampus)
router.post('/new', handlers.createCampuses)
router.put('/update/:id', handlers.updateCampus)
router.delete('/delete/:id', handlers.deleteCampus)


module.exports = router;