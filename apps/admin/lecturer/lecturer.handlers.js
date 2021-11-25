const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all lecturer
//@route    GET /lecturers
//@access   Admin
const getAllLecturers = asyncHandler(async (req, res, next) => {
  const lecturer = await model.Lecturer.find();

  res.status(200).json({
    success: true,
    count: lecturer.length,
    data: lecturer
  });
});

//@des      get one lecturer
//@route    GET /lecturers/:id
//@access   Admin
const getOneLecturer = asyncHandler(async (req, res, next) => {
  const lecturer = await model.Lecturer.findById(req.params.id);

  if (!lecturer) {
    return next(new ErrorResponse(`Lecturer is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: lecturer
  });
});

//@des      Create lecturers
//@route    POST /lecturers/new
//@access   Admin
const createLecturers = asyncHandler(async (req, res, next) => {
  const lecturer = await model.Lecturer.create(req.body);

  res.status(201).json({
    success: true,
    data: lecturer
  });
});

//@des      Update lecturer
//@route    PUT /lecturers/update/id
//@access   Admin
const updateLecturer = asyncHandler(async (req, res, next) => {
  const lecturer = await model.Lecturer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!lecturer) {
    return next(new ErrorResponse(`Lecturer is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: lecturer
  });
});

//@des      Delete lecturer
//@route    DELETE /lecturers/delete/id
//@access   Admin
const deleteLecturer = asyncHandler(async (req, res, next) => {
  const lecturer = await model.Lecturer.findByIdAndDelete(req.params.id);

  if (!lecturer) {
    return next(new ErrorResponse(`Lecturer is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllLecturers,
  getOneLecturer,
  createLecturers,
  updateLecturer,
  deleteLecturer
};
