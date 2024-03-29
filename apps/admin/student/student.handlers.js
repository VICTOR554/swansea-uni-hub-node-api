const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all students
//@route    GET /students
//@access   Admin
const getAllStudents = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one student
//@route    GET /students/:id
//@access   Admin
const getOneStudent = asyncHandler(async (req, res, next) => {
  const student = await model.Student.findById(req.params.id);

  if (!student) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: student
  });
});

//@des      Create students
//@route    POST /students/new
//@access   Admin
const createStudents = asyncHandler(async (req, res, next) => {

  const student = await model.Student.create(req.body);

  //Create token
  const token = student.getSignedJwtToken();

  res.status(201).json({
    success: true,
    data: student,
    token 
  });


  // sendTokenResponse(student, 200, res);

});

//@des      Update student
//@route    PUT /students/update/id
//@access   Admin
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

//@des      Delete student
//@route    DELETE /students/delete/id
//@access   Admin
const deleteStudent = asyncHandler(async (req, res, next) => {
  const student = await model.Student.findByIdAndDelete(req.params.id);

  if (!student) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
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
  getAllStudents,
  getOneStudent,
  createStudents,
  updateStudent,
  deleteStudent
};
