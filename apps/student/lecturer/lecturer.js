const express = require('express');
const router = express.Router()
const handlers = require('./lecturer.handlers');


router.get('/', handlers.getAllLecturers)
router.get('/:id', handlers.getOneLecturer)



module.exports = router;