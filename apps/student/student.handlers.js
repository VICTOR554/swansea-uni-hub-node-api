const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const model = require('../../models/model');


//@des      Login student
//@route    POST /students/login
//@access   Admin
const loginStudent = asyncHandler(async (req, res, next) => {
  const {number, password } = req.body;

  //Validate student number and password
  if (!number || !password) {
    return next(new ErrorResponse(`Please Provide a student number and password`, 400));
  }

  //check for user 
  const student = await model.Student.findOne({number}).select('+password');

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
  // const token = student.getSignedJwtToken();

  // res.status(200).json({
  //   success: true,
  //   token 
  // });

  sendTokenResponse(student, 200, res);

});

//@des      get student
//@route    GET /students/:id
//@access   Student
const getCurrentStudent = asyncHandler(async (req, res, next) => {
  const student = await model.Student.findById(req.student.id);


  res.status(200).json({
    success: true,
    data: student
  });
});

//@des      Update student
//@route    PUT /students/update/id
//@access   Student
const updateStudent = asyncHandler(async (req, res, next) => {
  const student = await model.Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!student) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: student
  });
});

//Get token from model, create cookie and send response
const sendTokenResponse = (student, statusCode, res) => {
  //Create token
  const token = student.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  };

  res
  .status(statusCode)
  .cookie('token', token, options)
  .json({
   success: true,
   token
  })
}

module.exports = {
  loginStudent,
  getCurrentStudent,
  updateStudent
};
