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

const getModules = function(req, res, next) {
  model.Student.findOne( req.params.number )
    .then(d => {
      req.module_code = d.module_code;
      next();
    })
    .catch(e => {
      res.send(e);
    });
};

const getModuleActivities = async function(
  element,
  start_date_time,
  end_date_time
) {
  a = await model.Activity.find({
    module_code: element,
    start_date_time: { $gt: start_date_time, $lt: end_date_time }
  });
  return a;
};

const getActivities = async function(req, res, next) {
  date_time = req.params.start_date_time;
  start_date_time = moment
    .unix(date_time)
    .startOf("day")
    .format("X");
  console.log(start_date_time);
  end_date_time = moment
    .unix(date_time)
    .endOf("day")
    .format("X");
  console.log(end_date_time);
  
  let activities = [];

  await req.module_code.forEach(async element => {
    module_activities = await getModuleActivities(
      element,
      start_date_time,
      end_date_time
    );
    activities = await activities.concat(module_activities);

    activities.sort((a, b) => {
      // Use toUpperCase() to ignore character casing
      const startA = a.start_date_time;
      const startB = b.start_date_time;
    
      let comparison = 0;
      if (startA > startB) {
        comparison = 1;
      } else if (startA < startB) {
        comparison = -1;
      }
      return comparison;
    })

    req.activities = activities;
    return activities;
  });

  setTimeout(() => {
    next();
  }, 500);
};

const getOneDayActivities = function(req, res) {
  res.send(req.activities);
};



module.exports = {
  getAllActivities,
  getOneActivity,
  getOneDayActivities,
  getModules,
  getActivities

};
