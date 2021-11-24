const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  // Log to console
  console.log(err.stack.red);

  // Bad objectId
  if (err.name === 'CastError') {
    const message = `Student not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
