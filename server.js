const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const admin = require('./apps/admin/admin')
const connectDB = require('./config/db');


//Load config vars
dotenv.config({ path: './config/config.env'});

// Connect to Database
connectDB(); 

const app = express();

app.use(logger);

//Mount routers
app.use('/admin', admin)

const PORT = process.env.PORT || 6000;

const server = app.listen(PORT,
    console.log(`Server runnin in ${process.env.NODE_ENV} mode on port ${PORT}`)
);


//Handle unhandle promise rejections
process.on('unhandledRejection,', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //close server & exit process
    server.close(() => process.exit(1));
});

