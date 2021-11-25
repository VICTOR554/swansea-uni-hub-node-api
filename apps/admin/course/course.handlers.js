const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all courses
//@route    GET /courses
//@access   Admin
const getAllCourses = asyncHandler(async (req, res, next) => {
  const course = await model.Course.find();

  res.status(200).json({
    success: true,
    count: course.length,
    data: course
  });
});
 
//@des      get one course
//@route    GET /courses/:id
//@access   Admin
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

//@des      Create courses
//@route    POST /courses/new
//@access   Admin
const createCourses = asyncHandler(async (req, res, next) => {
  const course = await model.Course.create(req.body);

  res.status(201).json({
    success: true,
    data: course
  });
});

//@des      Update course
//@route    PUT /courses/update/id
//@access   Admin
const updateCourse = asyncHandler(async (req, res, next) => {
  const course = await model.Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!course) {
    return next(new ErrorResponse(`Course is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: course
  });
});

//@des      Delete course
//@route    DELETE /courses/delete/id
//@access   Admin
const deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await model.Course.findByIdAndDelete(req.params.id);

  if (!course) {
    return next(new ErrorResponse(`Course is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllCourses,
  getOneCourse,
  createCourses,
  updateCourse,
  deleteCourse
};
