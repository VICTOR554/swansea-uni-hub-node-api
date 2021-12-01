const express = require('express');
const router = express.Router();

// Routes
const login = require('./login/login');

// Mounting the Routes and how it is displayed in the url
router.use('/login', login);

module.exports = router;
