const express = require('express');
const router = express.Router()
const handlers = require('./report.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Report), handlers.getAllReports)
router.get('/:id', handlers.getOneReport)
router.post('/new', handlers.createReports)
router.put('/update/:id', handlers.updateReport)
router.delete('/delete/:id', handlers.deleteReport)


module.exports = router;