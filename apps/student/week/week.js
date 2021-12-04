const express = require('express');
const router = express.Router()
const handlers = require('./week.handlers');


router.get('/', handlers.getAllWeeks)
router.get('/:id', handlers.getOneWeek)
router.get('/number/:number', handlers.getOneWeekByNumber)
router.get('/date/:date', handlers.getOneWeekByDate)


module.exports = router;