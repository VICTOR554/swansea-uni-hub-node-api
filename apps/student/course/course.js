const express = require('express');
const router = express.Router()
const handlers = require('./course.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Course), handlers.getAllCourses)
router.get('/:id', handlers.getOneCourse)



module.exports = router;