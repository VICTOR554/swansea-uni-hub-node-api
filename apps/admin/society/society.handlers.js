const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all societies
//@route    GET /societies
//@access   Admin
const getAllSocieties = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one society
//@route    GET /societies/:id
//@access   Admin
const getOneSociety = asyncHandler(async (req, res, next) => {
  const society = await model.Society.findById(req.params.id);

  if (!society) {
    return next(new ErrorResponse(`Society is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: society
  });
});

//@des      Create societies
//@route    POST /societies/new
//@access   Admin
const createSocieties = asyncHandler(async (req, res, next) => {
  const society = await model.Society.create(req.body);

  res.status(201).json({
    success: true,
    data: society
  });
});

//@des      Update society
//@route    PUT /societies/update/id
//@access   Admin
const updateSociety = asyncHandler(async (req, res, next) => {
  const society = await model.Society.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!society) {
    return next(new ErrorResponse(`Society is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: society
  });
});

//@des      Delete society
//@route    DELETE /societies/delete/id
//@access   Admin
const deleteSociety = asyncHandler(async (req, res, next) => {
  const society = await model.Society.findByIdAndDelete(req.params.id);

  if (!society) {
    return next(new ErrorResponse(`Society is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllSocieties,
  getOneSociety,
  createSocieties,
  updateSociety,
  deleteSociety
};
