const express = require('express');
const router = express.Router()
const handlers = require('./location.handlers');


router.get('/', handlers.getAllLocations)
router.get('/:id', handlers.getOneLocation)



module.exports = router;