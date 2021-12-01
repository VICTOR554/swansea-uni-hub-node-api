const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const model = require('../models/model');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // else if(req.cookies.token) {
  //     token = req.cookies.token
  // }

  //Verify token exists
  if (!token) {
    return next(new ErrorResponse(`Not authorized to access the route`, 401));
  }
  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    req.user = await model.Student.findById(decoded.id);
    next();
  } catch (err) {
    return next(new ErrorResponse(`Not authorized to access the route`, 401));
  }
});

