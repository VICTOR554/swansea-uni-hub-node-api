const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all terms
//@route    GET /terms
//@access   Admin
const getAllTerms = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one term
//@route    GET /terms/:id
//@access   Admin
const getOneTerm = asyncHandler(async (req, res, next) => {
  const term = await model.Term.findById(req.params.id);

  if (!term) {
    return next(new ErrorResponse(`Term is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: term
  });
});

//@des      Create terms
//@route    POST /terms/new
//@access   Admin
const createTerms = asyncHandler(async (req, res, next) => {
  const term = await model.Term.create(req.body);

  res.status(201).json({
    success: true,
    data: term
  });
});

//@des      Update term
//@route    PUT /terms/update/id
//@access   Admin
const updateTerm = asyncHandler(async (req, res, next) => {
  const term = await model.Term.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!term) {
    return next(new ErrorResponse(`Term is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: term
  });
});

//@des      Delete term
//@route    DELETE /terms/delete/id
//@access   Admin
const deleteTerm = asyncHandler(async (req, res, next) => {
  const term = await model.Term.findByIdAndDelete(req.params.id);

  if (!term) {
    return next(new ErrorResponse(`Term is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllTerms,
  getOneTerm,
  createTerms,
  updateTerm,
  deleteTerm
};
