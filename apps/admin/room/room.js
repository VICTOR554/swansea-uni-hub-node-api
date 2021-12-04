const express = require('express');
const router = express.Router()
const handlers = require('./room.handlers');
const model = require('../../../models/model');
const advancedResults = require('../../../middleware/advancedresults');

router.get('/', advancedResults(model.Room), handlers.getAllRooms)
router.get('/:id', handlers.getOneRoom)
router.post('/new', handlers.createRooms)
router.put('/update/:id', handlers.updateRoom)
router.delete('/delete/:id', handlers.deleteRoom)


module.exports = router;