const express = require('express');
const router = express.Router()
const handlers = require('./coursework.handlers');


router.get('/', handlers.getAllCourseworks)
router.get('/:id', handlers.getOneCoursework)
router.post('/new', handlers.createCourseworks)
router.put('/update/:id', handlers.updateCoursework)
router.delete('/delete/:id', handlers.deleteCoursework)


module.exports = router;