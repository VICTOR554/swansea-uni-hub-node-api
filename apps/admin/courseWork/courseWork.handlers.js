const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all courseworks
//@route    GET /courseworks
//@access   Admin
const getAllCourseworks = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one coursework
//@route    GET /courseworks/:id
//@access   Admin
const getOneCoursework = asyncHandler(async (req, res, next) => {
  const coursework = await model.Coursework.findById(req.params.id);

  if (!coursework) {
    return next(new ErrorResponse(`Coursework is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: coursework
  });
});

//@des      Create courseworks
//@route    POST /courseworks/new
//@access   Admin
const createCourseworks = asyncHandler(async (req, res, next) => {
  const coursework = await model.Coursework.create(req.body);

  res.status(201).json({
    success: true,
    data: coursework
  });
});

//@des      Update coursework
//@route    PUT /courseworks/update/id
//@access   Admin
const updateCoursework = asyncHandler(async (req, res, next) => {
  const coursework = await model.Coursework.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!coursework) {
    return next(new ErrorResponse(`Coursework is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: coursework
  });
});

//@des      Delete coursework
//@route    DELETE /courseworks/delete/id
//@access   Admin
const deleteCoursework = asyncHandler(async (req, res, next) => {
  const coursework = await model.Coursework.findByIdAndDelete(req.params.id);

  if (!coursework) {
    return next(new ErrorResponse(`Coursework is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllCourseworks,
  getOneCoursework,
  createCourseworks,
  updateCoursework,
  deleteCoursework
};
