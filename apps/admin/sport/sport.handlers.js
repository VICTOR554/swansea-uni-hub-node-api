const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all sports
//@route    GET /sports
//@access   Admin
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
//@access   Admin
const getOneSport = asyncHandler(async (req, res, next) => {
  const sport = await model.Sport.findById(req.params.id);

  if (!sport) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: sport
  });
});

//@des      Create sports
//@route    POST /sports/new
//@access   Admin
const createSports = asyncHandler(async (req, res, next) => {
  const sport = await model.Sport.create(req.body);

  res.status(201).json({
    success: true,
    data: sport
  });
});

//@des      Update sport
//@route    PUT /sports/update/id
//@access   Admin
const updateSport = asyncHandler(async (req, res, next) => {
  const sport = await model.Sport.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!sport) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: sport
  });
});

//@des      Delete sport
//@route    DELETE /sports/delete/id
//@access   Admin
const deleteSport = asyncHandler(async (req, res, next) => {
  const sport = await model.Sport.findByIdAndDelete(req.params.id);

  if (!sport) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllSports,
  getOneSport,
  createSports,
  updateSport,
  deleteSport
};
