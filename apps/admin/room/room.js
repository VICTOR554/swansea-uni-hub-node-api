const express = require('express');
const router = express.Router()
const handlers = require('./room.handlers');


router.get('/', handlers.getAllRooms)
router.get('/:id', handlers.getOneRoom)
router.post('/new', handlers.createRooms)
router.put('/update/:id', handlers.updateRoom)
router.delete('/delete/:id', handlers.deleteRoom)


module.exports = router;