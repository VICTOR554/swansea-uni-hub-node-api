const express = require('express');
const router = express.Router()
const handlers = require('./notification.handlers');


router.get('/current',  handlers.getCurrentNotifications)
router.get('/past',  handlers.getPastNotifications)
router.get('/one/:id', handlers.getOneNotification)



module.exports = router;