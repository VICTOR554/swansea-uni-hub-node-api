const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all activities
//@route    GET /activities
//@access   Admin
const getAllActivities = asyncHandler(async (req, res, next) => {
  const activity = await model.Activity.find();

  res.status(200).json({
    success: true,
    count: activity.length,
    data: activity
  });
});

//@des      get one activities
//@route    GET /activities/:id
//@access   Admin
const getOneActivity = asyncHandler(async (req, res, next) => {
  const activity = await model.Activity.findById(req.params.id);

  if (!activity) {
    return next(new ErrorResponse(`Activity is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: activity
  });
});

//@des      Create activity
//@route    POST /activities/new
//@access   Admin
const createActivities = asyncHandler(async (req, res, next) => {
  const activity = await model.Activity.create(req.body);

  res.status(201).json({
    success: true,
    data: activity
  });
});

//@des      Update activity
//@route    PUT /activities/update/id
//@access   Admin
const updateActivity = asyncHandler(async (req, res, next) => {
  const activity = await model.Activity.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!activity) {
    return next(new ErrorResponse(`Activity is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: activity
  });
});

//@des      Delete activity
//@route    DELETE /activities/delete/id
//@access   Admin
const deleteActivity = asyncHandler(async (req, res, next) => {
  const activity = await model.Activity.findByIdAndDelete(req.params.id);

  if (!activity) {
    return next(new ErrorResponse(`Activity is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllActivities,
  getOneActivity,
  createActivities,
  updateActivity,
  deleteActivity
};
