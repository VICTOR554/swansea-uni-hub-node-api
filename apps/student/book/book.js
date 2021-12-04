const express = require('express');
const router = express.Router()
const handlers = require('./book.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');


router.get('/', advancedResults(model.Book), handlers.getAllBooks)
router.get('/:id', handlers.getOneBook)



module.exports = router;