const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all weeks
//@route    GET /weeks
//@access   Student
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
//@access   Student
const getOneWeek = asyncHandler(async (req, res, next) => {
  const week = await model.Week.findById(req.params.id);

  if (!week) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: week
  });
});

module.exports = {
  getAllWeeks,
  getOneWeek
};
