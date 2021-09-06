const express = require('express');
const router = express.Router()
const handlers = require('./week.handlers');


router.get('/', handlers.getAllWeeks)
router.get('/:id', handlers.getOneWeek)
router.post('/new', handlers.createWeeks)
router.put('/update/:id', handlers.updateWeek)
router.delete('/delete/:id', handlers.deleteWeek)


module.exports = router;