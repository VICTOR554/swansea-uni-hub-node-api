const express = require('express');
const dotenv = require('dotenv');
const admin = require('./apps/admin/admin')

//Load config vars
dotenv.config({ path: './config/config.env'});

const app = express();

//Mount admin routers
app.use('/admin', admin)

const PORT = process.env.PORT || 6000;

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);