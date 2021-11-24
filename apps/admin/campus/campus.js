const express = require('express');
const router = express.Router()
const handlers = require('./campus.handlers');


router.get('/', handlers.getAllCampuses)
router.get('/:id', handlers.getOneCampus)
router.post('/new', handlers.createCampuses)
router.put('/update/:id', handlers.updateCampus)
router.delete('/delete/:id', handlers.deleteCampus)


module.exports = router;