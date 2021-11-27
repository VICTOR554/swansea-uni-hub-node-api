const express = require('express');
const router = express.Router()
const handlers = require('./module.handlers');



router.get('/', handlers.getAllModules)
router.get('/:id', handlers.getOneModule)
router.post('/new', handlers.createModules)
router.put('/update/:id', handlers.updateModule)
router.delete('/delete/:id', handlers.deleteModule)


module.exports = router;