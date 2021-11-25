const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all modules
//@route    GET /modules
//@access   Student
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
//@access   Student
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

module.exports = {
  getAllModules,
  getOneModule
};
