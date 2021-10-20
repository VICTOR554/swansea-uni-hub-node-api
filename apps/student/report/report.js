const express = require('express');
const router = express.Router()
const handlers = require('./report.handlers');


router.get('/', handlers.getAllReports)
router.get('/:id', handlers.getOneReport)



module.exports = router;