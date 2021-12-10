const express = require('express');
const router = express.Router();

const handlers = require('./student.handlers');

// Routes
const activity = require('./activity/activity');
const book = require('./book/book');
const booking = require('./booking/booking');
const building = require('./building/building');
const campus = require('./campus/campus');
const course = require('./course/course');
const coursework = require('./coursework/coursework');
const event = require('./event/event');
const finance = require('./finance/finance');
const lecturer = require('./lecturer/lecturer');
const location = require('./location/location');
const modules = require('./module/module');
// const note = require('./note/note');
const report = require('./report/report');
const room = require('./room/room');
const society = require('./society/society');
const sport = require('./sport/sport');
const task = require('./task/task');
const week = require('./week/week');

// Mounting the Routes and how it is displayed in the url
router.use('/activity', activity);
router.use('/book', book);
router.use('/booking', booking);
router.use('/building', building);
router.use('/campus', campus);
router.use('/course', course);
router.use('/coursework', coursework);
router.use('/event', event);
router.use('/finance', finance);
router.use('/lecturer', lecturer);
router.use('/location', location);
router.use('/modules', modules);
// router.use('/note', note);
router.use('/report', report);
router.use('/room', room);
router.use('/society', society);
router.use('/sport', sport);
router.use('/task', task);
router.use('/week', week);

router.get('/me', handlers.getCurrentStudent);
router.put('/update/:id', handlers.updateStudent);

module.exports = router;
