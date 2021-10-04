const express = require('express');
const router = express.Router()
const handlers = require('./module.handlers');


router.get('/', handlers.getAllModules)
router.get('/:id', handlers.getOneModule)



module.exports = router;