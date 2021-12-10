const express = require('express');
const router = express.Router();

// Routes
const activity = require('./activity/activity');
const book = require('./book/book');
const booking = require('./booking/booking');
const building = require('./building/building');
const campus = require('./campus/campus');
const course = require('./course/course');
// const coursework = require('./coursework/coursework');
const event = require('./event/event');
const finance = require('./finance/finance');
const lecturer = require('./lecturer/lecturer');
const location = require('./location/location');
const modules = require('./module/module');
// const report = require('./report/report');
const room = require('./room/room');
const session = require('./session/session');
const society = require('./society/society');
const sport = require('./sport/sport');
const student = require('./student/student');
const term = require('./term/term');
const week = require('./week/week');


// Mounting the Routes and how it is displayed in the url
router.use('/activity', activity);
router.use('/book', book);
router.use('/booking', booking);
router.use('/building', building);
router.use('/campus', campus);
router.use('/course', course);
// router.use('/coursework', coursework);
router.use('/event', event);
router.use('/finance', finance);
router.use('/lecturer', lecturer);
router.use('/location', location);
router.use('/modules', modules);
// router.use('/report', report);
router.use('/room', room);
router.use('/session', session);
router.use('/society', society);
router.use('/sport', sport);
router.use('/student', student);
router.use('/term', term);
router.use('/week', week);

module.exports = router;
