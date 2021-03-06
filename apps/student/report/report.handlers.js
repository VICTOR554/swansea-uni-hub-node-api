const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all reports
//@route    GET /reports
//@access   Student
const getAllReports = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one report
//@route    GET /reports/:id
//@access   Student
const getOneReport = asyncHandler(async (req, res, next) => {
  const report = await model.Report.findById(req.params.id);

  if (!report) {
    return next(new ErrorResponse(`Report is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: report
  });
});

module.exports = {
  getAllReports,
  getOneReport
};
