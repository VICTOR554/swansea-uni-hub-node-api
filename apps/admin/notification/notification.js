const express = require('express');
const router = express.Router()
const handlers = require('./notification.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Notification), handlers.getAllNotification)
router.get('/:id', handlers.getOneNotification)
router.post('/new', handlers.createNotification)
router.put('/update/:id', handlers.updateNotification)
router.delete('/delete/:id', handlers.deleteNotification)


module.exports = router;