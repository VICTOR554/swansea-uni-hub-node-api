const express = require('express');
const router = express.Router()
const handlers = require('./society.handlers');


router.get('/', handlers.getAllSocieties)
router.get('/:id', handlers.getOneSociety)



module.exports = router;