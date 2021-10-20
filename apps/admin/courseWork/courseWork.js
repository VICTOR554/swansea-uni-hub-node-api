const express = require('express');
const router = express.Router()
const handlers = require('./courseWork.handlers');


router.get('/', handlers.getAllCourseWorks)
router.get('/:id', handlers.getOneCourseWork)
router.post('/new', handlers.createCourseWorkWorks)
router.put('/update/:id', handlers.updateCourseWork)
router.delete('/delete/:id', handlers.deleteCourseWork)


module.exports = router;