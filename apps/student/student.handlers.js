const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const model = require('../../models/model');

//@des      get one student
//@route    GET /students/:id
//@access   Student
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
  getOneStudent,
  updateStudent
};
