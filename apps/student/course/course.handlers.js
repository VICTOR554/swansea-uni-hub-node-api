const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all courses
//@route    GET /courses
//@access   Student
const getAllCourses = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one course
//@route    GET /courses/:id
//@access   Student
const getOneCourse = asyncHandler(async (req, res, next) => {
  const course = await model.Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse(`Course is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: course
  });
});

module.exports = {
  getAllCourses,
  getOneCourse
};
