const express = require('express');
const router = express.Router()
const handlers = require('./lecturer.handlers');


router.get('/', handlers.getAllLecturers)
router.get('/:id', handlers.getOneLecturer)
router.post('/new', handlers.createLecturers)
router.put('/update/:id', handlers.updateLecturer)
router.delete('/delete/:id', handlers.deleteLecturer)


module.exports = router;