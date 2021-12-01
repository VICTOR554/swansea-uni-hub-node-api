const express = require('express');
const router = express.Router();
const handlers = require('./login.handlers');

router.post('/student', handlers.loginStudent);

module.exports = router;
