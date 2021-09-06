const express = require('express');
const router = express.Router()
const handlers = require('./report.handlers');


router.get('/', handlers.getAllReports)
router.get('/:id', handlers.getOneReport)
router.post('/new', handlers.createReports)
router.put('/update/:id', handlers.updateReport)
router.delete('/delete/:id', handlers.deleteReport)


module.exports = router;