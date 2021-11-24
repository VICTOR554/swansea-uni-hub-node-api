const express = require('express');
const router = express.Router()
const handlers = require('./campus.handlers');


router.get('/', handlers.getAllCampuses)
router.get('/:id', handlers.getOneCampus)



module.exports = router;