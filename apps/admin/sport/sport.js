const express = require('express');
const router = express.Router()
const handlers = require('./sport.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Sport), handlers.getAllSports)
router.get('/:id', handlers.getOneSport)
router.post('/new', handlers.createSports)
router.put('/update/:id', handlers.updateSport)
router.delete('/delete/:id', handlers.deleteSport)


module.exports = router;