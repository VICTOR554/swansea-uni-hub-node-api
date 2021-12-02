const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all societies
//@route    GET /societies
//@access   Student
const getAllSocieties = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one society
//@route    GET /societies/:id
//@access   Student
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

module.exports = {
  getAllSocieties,
  getOneSociety
};
