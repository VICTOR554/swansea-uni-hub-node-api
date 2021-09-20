const express = require('express');
const router = express.Router()
const handlers = require('./location.handlers');


router.get('/', handlers.getAllLocations)
router.get('/:id', handlers.getOneLocation)
router.post('/new', handlers.createLocations)
router.put('/update/:id', handlers.updateLocation)
router.delete('/delete/:id', handlers.deleteLocation)


module.exports = router;