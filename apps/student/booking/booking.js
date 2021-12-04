const express = require('express');
const router = express.Router()
const handlers = require('./booking.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Booking), handlers.getAllBookings)
router.get('/:id', handlers.getOneBooking)
router.post('/new', handlers.createBookings)
router.put('/update/:id', handlers.updateBooking)
router.delete('/delete/:id', handlers.deleteBooking)


module.exports = router;