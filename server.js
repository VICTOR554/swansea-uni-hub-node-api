const express = require('express');
const dotenv = require('dotenv');
const admin = require('./apps/admin/admin')
const logger = require('./middleware/logger')

//Load config vars
dotenv.config({ path: './config/config.env'});

const app = express();



app.use(logger);

//Mount routers
app.use('/admin', admin)

const PORT = process.env.PORT || 6000;

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);