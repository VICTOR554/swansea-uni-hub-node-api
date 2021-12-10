const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const admin = require('./apps/admin/admin')
const auth = require('./apps/auth/auth')
const student = require('./apps/student/student')
const {protect} = require('./middleware/auth')
require('dotenv').config()
// const connectDB = require('./config/db');


//Load config vars
dotenv.config({ path: './config/config.env'});

// Connect to Database
// connectDB(); 




const app = express();

//Body parser
app.use(express.json());

//cookie parser
app.use(cookieParser());


// development logging middleware (morgan)
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
 
//Mount routers
app.use('/admin', admin);
app.use('/auth', auth);
app.use('/student', protect, student);

app.use(errorHandler);

const PORT = process.env.PORT || 6000;

const server = app.listen(PORT,
    console.log(`Server runnin in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

//Handle unhandle promise rejections
process.on('unhandledRejection,', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //close server and exit process
    server.close(() => process.exit(1));
});

