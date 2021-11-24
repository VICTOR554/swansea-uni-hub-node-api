const express = require('express');
const router = express.Router()
const handlers = require('./society.handlers');


router.get('/', handlers.getAllSocieties)
router.get('/:id', handlers.getOneSociety)
router.post('/new', handlers.createSocieties)
router.put('/update/:id', handlers.updateSociety)
router.delete('/delete/:id', handlers.deleteSociety)


module.exports = router;