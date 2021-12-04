const express = require('express');
const router = express.Router()
const handlers = require('./book.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Book), handlers.getAllBooks)
router.get('/:id', handlers.getOneBook)
router.post('/new', handlers.createBooks)
router.put('/update/:id', handlers.updateBook)
router.delete('/delete/:id', handlers.deleteBook)


module.exports = router;