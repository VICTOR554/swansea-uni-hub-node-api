const express = require('express');
const router = express.Router()
const handlers = require('./finance.handlers');


router.get('/', handlers.getAllFinances)
router.get('/:id', handlers.getOneFinance)


module.exports = router;