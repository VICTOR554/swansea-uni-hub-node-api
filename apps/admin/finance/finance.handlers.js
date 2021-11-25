const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all finances
//@route    GET /finances
//@access   Admin
const getAllFinances = asyncHandler(async (req, res, next) => {
  const finance = await model.Finance.find();

  res.status(200).json({
    success: true,
    count: finance.length,
    data: finance
  });
});

//@des      get one finance
//@route    GET /finances/:id
//@access   Admin
const getOneFinance = asyncHandler(async (req, res, next) => {
  const finance = await model.Finance.findById(req.params.id);

  if (!finance) {
    return next(new ErrorResponse(`Finance is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: finance
  });
});

//@des      Create finances
//@route    POST /finances/new
//@access   Admin
const createFinances = asyncHandler(async (req, res, next) => {
  const finance = await model.Finance.create(req.body);

  res.status(201).json({
    success: true,
    data: finance
  });
});

//@des      Update finance
//@route    PUT /finances/update/id
//@access   Admin
const updateFinance = asyncHandler(async (req, res, next) => {
  const finance = await model.Finance.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!finance) {
    return next(new ErrorResponse(`Finance is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: finance
  });
});

//@des      Delete finance
//@route    DELETE /finances/delete/id
//@access   Admin
const deleteFinance = asyncHandler(async (req, res, next) => {
  const finance = await model.Finance.findByIdAndDelete(req.params.id);

  if (!finance) {
    return next(new ErrorResponse(`Finance is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllFinances,
  getOneFinance,
  createFinances,
  updateFinance,
  deleteFinance
};
