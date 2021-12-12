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
      req.moduleCode = d.moduleCode;
      next();
    })
    .catch(e => {
      res.send(e);
    });
};

const getModuleActivities = async function(
  element,
  startDateTime,
  endDateTime
) {
  a = await model.Activity.find({
    moduleCode: element,
    startDateTime: { $gt: startDateTime, $lt: endDateTime }
  });
  return a;
};

const getActivities = async function(req, res, next) {
  dateTime = req.params.startDateTime;
  startDateTime = moment
    .unix(dateTime)
    .startOf("day")
    .format("X");
  console.log(startDateTime);
  endDateTime = moment
    .unix(dateTime)
    .endOf("day")
    .format("X");
  console.log(endDateTime);

  console.log("modules", req.moduleCode);
  
  let activities = [];

  await req.moduleCode.forEach(async element => {
    module_activities = await getModuleActivities(
      element,
      startDateTime,
      endDateTime
    );
    activities = await activities.concat(module_activities);

    activities.sort((a, b) => {
      // Use toUpperCase() to ignore character casing
      const startA = a.startDateTime;
      const startB = b.startDateTime;
    
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
