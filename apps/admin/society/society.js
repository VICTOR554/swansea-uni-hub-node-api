const express = require('express');
const router = express.Router()
const handlers = require('./society.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Society), handlers.getAllSocieties)
router.get('/:id', handlers.getOneSociety)
router.post('/new', handlers.createSocieties)
router.put('/update/:id', handlers.updateSociety)
router.delete('/delete/:id', handlers.deleteSociety)


module.exports = router;