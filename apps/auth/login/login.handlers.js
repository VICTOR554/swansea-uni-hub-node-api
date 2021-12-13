const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      Login student
//@route    POST /auth/login
//@access   auth
const loginStudent = asyncHandler(async (req, res, next) => {
  const { number, password } = req.body;

  //Validate student number and password
  if (!number || !password) {
    return next(new ErrorResponse(`Please Provide a student number and password`, 400));
  }

  //check for user
  const student = await model.Student.findOne({ number }).select('+password');

  //Validate student number and password
  if (!student) {
    return next(new ErrorResponse(`Invalid Credentials`, 401));
  }

  // check if password match
  const match = await student.matchPassword(password);

  if (!match) {
    return next(new ErrorResponse(`Invalid Credentials`, 401));
  }

  //Create token
  const token = student.getSignedJwtToken();

  res.status(200).json({
    success: true,
    token
  });

 // sendTokenResponse(student, 200, res);
});

//Get token from model, create cookie and send response
const sendTokenResponse = (student, statusCode, res) => {
  //Create token
  const token = student.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  };

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token
  });
};

module.exports = {
  loginStudent
};
