const express = require('express');
const router = express.Router()
const handlers = require('./activity.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Activity), handlers.getAllActivities)
router.get('/:id', handlers.getOneActivity)
router.post('/new', handlers.createActivities)
router.put('/update/:id', handlers.updateActivity)
router.delete('/delete/:id', handlers.deleteActivity)


module.exports = router;   