const express = require('express');
const router = express.Router()
const handlers = require('./module.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Module), handlers.getAllModules)
router.get('/:id', handlers.getOneModule)
router.post('/new', handlers.createModules)
router.put('/update/:id', handlers.updateModule)
router.delete('/delete/:id', handlers.deleteModule)


module.exports = router;