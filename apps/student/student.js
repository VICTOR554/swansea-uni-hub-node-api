const express = require('express')
const router = express.Router()

const handlers = require('./student.handlers');

router.get('/:id', handlers.getStudent)
router.put('/update/:id', handlers.updateStudent)

// Routes
const activity = require('./activity/activity');
const location = require('./location/location');
const modules = require('./module/module');
const week = require('./week/week');
const coursework = require('./coursework/coursework');
const finance = require('./finance/finance');


// Mounting the Routes and how it is displayed in the url
router.use('/activities', activity);
router.use('/locations', location);
router.use('/modules', modules);
router.use('/weeks', week);
router.use('/courseworks', coursework);
router.use('/finances', finance);



module.exports = router;