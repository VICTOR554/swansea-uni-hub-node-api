const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const model = require('../../models/model');

//@des      get student
//@route    GET /students/me
//@access   Student
const getCurrentStudent = asyncHandler(async (req, res, next) => {
  console.log("user ",req.user.number)
  const student = await model.Student.findOne({number: req.user.number});

  console.log(req);

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

module.exports = {
  getCurrentStudent,
  updateStudent
};
