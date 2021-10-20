const express = require('express');
const router = express.Router()
const handlers = require('./coursework.handlers');


router.get('/', handlers.getAllCourseworks)
router.get('/:id', handlers.getOneCoursework)



module.exports = router;