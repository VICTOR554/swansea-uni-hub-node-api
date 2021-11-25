const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all finances
//@route    GET /finances
//@access   Student
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
//@access   Student
const getOneFinance = asyncHandler(async (req, res, next) => {
  const finance = await model.Finance.findById(req.params.id);

  if (!finance) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: finance
  });
});

module.exports = {
  getAllFinances,
  getOneFinance
};
