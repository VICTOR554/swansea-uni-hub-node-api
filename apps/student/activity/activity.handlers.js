const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all activities
//@route    GET /activities
//@access   Student
const getAllActivities = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one activities
//@route    GET /activities/:id
//@access   Student
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



module.exports = {
  getAllActivities,
  getOneActivity
};
