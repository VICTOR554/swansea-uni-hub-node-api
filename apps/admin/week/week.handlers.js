const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all weeks
//@route    GET /weeks
//@access   Admin
const getAllWeeks = asyncHandler(async (req, res, next) => {
  const week = await model.Week.find();

  res.status(200).json({
    success: true,
    count: week.length,
    data: week
  });
});

//@des      get one week
//@route    GET /weeks/:id
//@access   Admin
const getOneWeek = asyncHandler(async (req, res, next) => {
  const week = await model.Week.findById(req.params.id);

  if (!week) {
    return next(new ErrorResponse(`Week is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: week
  });
});

//@des      Create weeks
//@route    POST /weeks/new
//@access   Admin
const createWeeks = asyncHandler(async (req, res, next) => {
  const week = await model.Week.create(req.body);

  res.status(201).json({
    success: true,
    data: week
  });
});

//@des      Update week
//@route    PUT /weeks/update/id
//@access   Admin
const updateWeek = asyncHandler(async (req, res, next) => {
  const week = await model.Week.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!week) {
    return next(new ErrorResponse(`Week is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: week
  });
});

//@des      Delete week
//@route    DELETE /weeks/delete/id
//@access   Admin
const deleteWeek = asyncHandler(async (req, res, next) => {
  const week = await model.Week.findByIdAndDelete(req.params.id);

  if (!week) {
    return next(new ErrorResponse(`Week is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllWeeks,
  getOneWeek,
  createWeeks,
  updateWeek,
  deleteWeek
};
