const express = require('express');
const router = express.Router()
const handlers = require('./building.handlers');


router.get('/', handlers.getAllBuildings)
router.get('/:id', handlers.getOneBuilding)



module.exports = router;