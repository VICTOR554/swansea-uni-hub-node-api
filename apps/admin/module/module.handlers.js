const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all modules
//@route    GET /modules
//@access   Admin
const getAllModules = asyncHandler(async (req, res, next) => {
  const module = await model.Module.find();

  res.status(200).json({
    success: true,
    count: module.length,
    data: module
  });
});

//@des      get one module
//@route    GET /modules/:id
//@access   Admin
const getOneModule = asyncHandler(async (req, res, next) => {
  const module = await model.Module.findById(req.params.id);

  if (!module) {
    return next(new ErrorResponse(`Module is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: module
  });
});

//@des      Create modules
//@route    POST /modules/new
//@access   Admin
const createModules = asyncHandler(async (req, res, next) => {
  const module = await model.Module.create(req.body);

  res.status(201).json({
    success: true,
    data: module
  });
});

//@des      Update module
//@route    PUT /modules/update/id
//@access   Admin
const updateModule = asyncHandler(async (req, res, next) => {
  const module = await model.Module.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!module) {
    return next(new ErrorResponse(`Module is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: module
  });
});

//@des      Delete module
//@route    DELETE /modules/delete/id
//@access   Admin
const deleteModule = asyncHandler(async (req, res, next) => {
  const module = await model.Module.findByIdAndDelete(req.params.id);

  if (!module) {
    return next(new ErrorResponse(`Module is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllModules,
  getOneModule,
  createModules,
  updateModule,
  deleteModule
};
