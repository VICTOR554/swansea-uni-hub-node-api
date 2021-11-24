const express = require('express');
const router = express.Router()
const handlers = require('./course.handlers');


router.get('/', handlers.getAllCourses)
router.get('/:id', handlers.getOneCourse)



module.exports = router;