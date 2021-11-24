const express = require('express');
const router = express.Router()
const handlers = require('./room.handlers');


router.get('/', handlers.getAllRooms)
router.get('/:id', handlers.getOneRoom)



module.exports = router;