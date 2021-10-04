const express = require('express');
const router = express.Router()
const handlers = require('./activity.handlers');


router.get('/', handlers.getAllActivities)
router.get('/:id', handlers.getOneActivity)


module.exports = router;