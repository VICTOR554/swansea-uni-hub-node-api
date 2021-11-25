const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all locations
//@route    GET /locations
//@access   Admin
const getAllLocations = asyncHandler(async (req, res, next) => {
  const location = await model.Location.find();

  res.status(200).json({
    success: true,
    count: location.length,
    data: location
  });
});

//@des      get one location
//@route    GET /locations/:id
//@access   Admin
const getOneLocation = asyncHandler(async (req, res, next) => {
  const location = await model.Location.findById(req.params.id);

  if (!location) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: location
  });
});

//@des      Create locations
//@route    POST /locations/new
//@access   Admin
const createLocations = asyncHandler(async (req, res, next) => {
  const location = await model.Location.create(req.body);

  res.status(201).json({
    success: true,
    data: location
  });
});

//@des      Update location
//@route    PUT /locations/update/id
//@access   Admin
const updateLocation = asyncHandler(async (req, res, next) => {
  const location = await model.Location.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!location) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: location
  });
});

//@des      Delete location
//@route    DELETE /locations/delete/id
//@access   Admin
const deleteLocation = asyncHandler(async (req, res, next) => {
  const location = await model.Location.findByIdAndDelete(req.params.id);

  if (!location) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllLocations,
  getOneLocation,
  createLocations,
  updateLocation,
  deleteLocation
};
