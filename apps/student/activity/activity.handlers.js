const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');
const moment = require("moment");

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

//@des      get one activities
//@route    GET /activities/:id
//@access   Student
// const getOneActivityByDay = asyncHandler(async (req, res, next) => {
  

//   date_time = req.params.start_date_time;
//   start_date_time = moment
//     .unix(date_time)
//     .startOf("day")
//     .format("X");
//   console.log(start_date_time);
//   end_date_time = moment
//     .unix(date_time)
//     .endOf("day")
//     .format("X");
//   console.log(end_date_time);

  

//   res.status(200).json(res.advancedResults)

//   if (!activity) {
//     return next(new ErrorResponse(`Activity is not in the database with the id of ${req.params.id}`, 404));
//   }

//   res.status(200).json({
//     success: true,
//     data: activity
//   });
// });



module.exports = {
  getAllActivities,
  getOneActivity,

};
