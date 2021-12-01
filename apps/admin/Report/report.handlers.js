const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all reports
//@route    GET /reports
//@access   Admin
const getAllReports = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one report
//@route    GET /reports/:id
//@access   Admin
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

//@des      Create reports
//@route    POST /reports/new
//@access   Admin
const createReports = asyncHandler(async (req, res, next) => {
  const report = await model.Report.create(req.body);

  res.status(201).json({
    success: true,
    data: report
  });
});

//@des      Update report
//@route    PUT /reports/update/id
//@access   Admin
const updateReport = asyncHandler(async (req, res, next) => {
  const report = await model.Report.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!report) {
    return next(new ErrorResponse(`Report is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: report
  });
});

//@des      Delete report
//@route    DELETE /reports/delete/id
//@access   Admin
const deleteReport = asyncHandler(async (req, res, next) => {
  const report = await model.Report.findByIdAndDelete(req.params.id);

  if (!report) {
    return next(new ErrorResponse(`Report is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllReports,
  getOneReport,
  createReports,
  updateReport,
  deleteReport
};
