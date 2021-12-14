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
const notification = require('./notification/notification');
const note = require('./note2/note');
const report = require('./report/report');
const room = require('./room/room');
const society = require('./society/society');
const sport = require('./sport/sport');
const task = require('./task/task');
const week = require('./week/week');
const { Note } = require('../../models/model');

// Mounting the Routes and how it is displayed in the url
router.use('/activities', activity);
router.use('/books', book);
router.use('/bookings', booking);
router.use('/buildings', building);
router.use('/campuses', campus);
router.use('/courses', course);
router.use('/courseworks', coursework);
router.use('/events', event);
router.use('/finances', finance);
router.use('/lecturers', lecturer);
router.use('/locations', location);
router.use('/modules', modules);
router.use('/notifications', notification);
router.use('/notes', note);
router.use('/reports', report);
router.use('/rooms', room);
router.use('/societies', society);
router.use('/sports', sport);
router.use('/tasks', task);
router.use('/weeks', week);

router.get('/current', handlers.getCurrentStudent);
router.put('/update/:id', handlers.updateStudent);

module.exports = router;
