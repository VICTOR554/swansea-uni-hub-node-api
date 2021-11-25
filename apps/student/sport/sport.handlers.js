const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all sports
//@route    GET /sports
//@access   Student
const getAllSports = asyncHandler(async (req, res, next) => {
  const sport = await model.Sport.find();

  res.status(200).json({
    success: true,
    count: sport.length,
    data: sport
  });
});

//@des      get one sport
//@route    GET /sports/:id
//@access   Student
const getOneSport = asyncHandler(async (req, res, next) => {
  const sport = await model.Sport.findById(req.params.id);

  if (!sport) {
    return next(new ErrorResponse(`Sport is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: sport
  });
});

module.exports = {
  getAllSports,
  getOneSport
};
