const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const admin = require('./apps/admin/admin')
const auth = require('./apps/auth/auth')
const student = require('./apps/student/student')
const {protect} = require('./middleware/auth')
const cors = require('cors');
// const connectDB = require('./config/db');
require('dotenv').config({ path: '.env' })


//Load config vars
// dotenv.config({ path: './config/config.env'});

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
 // Enable CORS
app.use(cors());
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Mount routers
console.log("hey server.js");

app.use('/admin', admin);
app.use('/auth', auth);
app.use('/student', protect, student);

app.use(errorHandler);

const PORT = process.env.PORT;


const server = app.listen(PORT,
    console.log(`Server runnin in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

//Handle unhandle promise rejections
process.on('unhandledRejection,', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //close server and exit process
    server.close(() => process.exit(1));
});

