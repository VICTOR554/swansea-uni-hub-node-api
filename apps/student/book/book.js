const express = require('express');
const router = express.Router()
const handlers = require('./book.handlers');


router.get('/', handlers.getAllBooks)
router.get('/:id', handlers.getOneBook)



module.exports = router;