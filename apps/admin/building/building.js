const express = require('express');
const router = express.Router()
const handlers = require('./building.handlers');


router.get('/', handlers.getAllBuildings)
router.get('/:id', handlers.getOneBuilding)
router.post('/new', handlers.createBuildings)
router.put('/update/:id', handlers.updateBuilding)
router.delete('/delete/:id', handlers.deleteBuilding)


module.exports = router;