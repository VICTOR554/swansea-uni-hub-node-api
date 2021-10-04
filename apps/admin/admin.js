const express = require('express')
const router = express.Router()

// Routes
const student = require('./student/student');
const activity = require('./activity/activity');
const course = require('./course/course');
const lecturer = require('./lecturer/lecturer');
const location = require('./location/location');
const modules = require('./module/module');
const report = require('./report/report');
const session = require('./session/session');
const term = require('./term/term');
const week = require('./week/week');


// Mounting the Routes and how it is displayed in the url
router.use('/students', student);
router.use('/activities', activity);
router.use('/courses', course);
router.use('/lecturers', lecturer);
router.use('/locations', location);
router.use('/modules', modules);
router.use('/reports', report);
router.use('/sessions', session);
router.use('/terms', term);
router.use('/weeks', week);



module.exports = router;