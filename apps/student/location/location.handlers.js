const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all locations
//@route    GET /locations
//@access   Student
const getAllLocations = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one location
//@route    GET /locations/:id
//@access   Student
const getOneLocation = asyncHandler(async (req, res, next) => {
  const location = await model.Location.findById(req.params.id);

  if (!location) {
    return next(new ErrorResponse(`Location is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: location
  });
});

module.exports = {
  getAllLocations,
  getOneLocation
};
