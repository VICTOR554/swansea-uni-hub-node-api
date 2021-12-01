const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all campuses
//@route    GET /campuses
//@access   Admin
const getAllCampuses = asyncHandler(async (req, res, next) => {
  const campus = await model.Campus.find();

  res.status(200).json({
    success: true,
    count: campus.length,
    data: campus
  });
});

//@des      get one campus
//@route    GET /campuses/:id
//@access   Admin
const getOneCampus = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      Create campuses
//@route    POST /campuses/new
//@access   Admin
const createCampuses = asyncHandler(async (req, res, next) => {
  const campus = await model.Campus.create(req.body);

  res.status(201).json({
    success: true,
    data: campus
  });
});

//@des      Update campus
//@route    PUT /campuses/update/id
//@access   Admin
const updateCampus = asyncHandler(async (req, res, next) => {
  const campus = await model.Campus.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!campus) {
    return next(new ErrorResponse(`Campus is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: campus
  });
});

//@des      Delete campus
//@route    DELETE /campuses/delete/id
//@access   Admin
const deleteCampus = asyncHandler(async (req, res, next) => {
  const campus = await model.Campus.findByIdAndDelete(req.params.id);

  if (!campus) {
    return next(new ErrorResponse(`Campus is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllCampuses,
  getOneCampus,
  createCampuses,
  updateCampus,
  deleteCampus
};
