const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all buildings
//@route    GET /buildings
//@access   Admin
const getAllBuildings = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one building
//@route    GET /buildings/:id
//@access   Admin
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

//@des      Create buildings
//@route    POST /buildings/new
//@access   Admin
const createBuildings = asyncHandler(async (req, res, next) => {
  const building = await model.Building.create(req.body);

  res.status(201).json({
    success: true,
    data: building
  });
});

//@des      Update building
//@route    PUT /buildings/update/id
//@access   Admin
const updateBuilding = asyncHandler(async (req, res, next) => {
  const building = await model.Building.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!building) {
    return next(new ErrorResponse(`Building is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: building
  });
});

//@des      Delete building
//@route    DELETE /buildings/delete/id
//@access   Admin
const deleteBuilding = asyncHandler(async (req, res, next) => {
  const building = await model.Building.findByIdAndDelete(req.params.id);

  if (!building) {
    return next(new ErrorResponse(`Building is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllBuildings,
  getOneBuilding,
  createBuildings,
  updateBuilding,
  deleteBuilding
};
