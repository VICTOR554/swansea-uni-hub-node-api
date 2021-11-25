const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all buildings
//@route    GET /buildings
//@access   Student
const getAllBuildings = asyncHandler(async (req, res, next) => {
  const building = await model.Building.find();

  res.status(200).json({
    success: true,
    count: building.length,
    data: building
  });
});

//@des      get one building
//@route    GET /buildings/:id
//@access   Student
const getOneBuilding = asyncHandler(async (req, res, next) => {
  const building = await model.Building.findById(req.params.id);

  if (!building) {
    return next(new ErrorResponse(`Building is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: building
  });
});

module.exports = {
  getAllBuildings,
  getOneBuilding
};
