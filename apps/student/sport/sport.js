const express = require('express');
const router = express.Router()
const handlers = require('./sport.handlers');


router.get('/', handlers.getAllSports)
router.get('/:id', handlers.getOneSport)



module.exports = router;