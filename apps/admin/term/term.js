const express = require('express');
const router = express.Router()
const handlers = require('./term.handlers');


router.get('/', handlers.getAllTerms)
router.get('/:id', handlers.getOneTerm)
router.post('/new', handlers.createTerms)
router.put('/update/:id', handlers.updateTerm)
router.delete('/delete/:id', handlers.deleteTerm)


module.exports = router;