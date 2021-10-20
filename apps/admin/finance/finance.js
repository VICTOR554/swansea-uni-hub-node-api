const express = require('express');
const router = express.Router()
const handlers = require('./finance.handlers');


router.get('/', handlers.getAllFinances)
router.get('/:id', handlers.getOneFinance)
router.post('/new', handlers.createFinances)
router.put('/update/:id', handlers.updateFinance)
router.delete('/delete/:id', handlers.deleteFinance)


module.exports = router;