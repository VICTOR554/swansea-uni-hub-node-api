const model = require('../../../models/model');

//@des      get all reports
//@route    GET /reports
//@access   Admin
const getAllReports = async (req, res, next) => { 
  try {
    const report = await model.Report.find();

    res.status(200).json({
      success: true,
      count: report.length,
      data: report
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      get one report
//@route    GET /reports/:id
//@access   Admin
const getOneReport = async (req, res, next) => {
  try {
    const report = await model.Report.findById(req.params.id);

    if (!report) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: report
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Create reports
//@route    POST /reports/new
//@access   Admin
const createReports = async (req, res, next) => {
  try {
    const report = await model.Report.create(req.body);

    res.status(201).json({
      success: true,
      data: report
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Update report
//@route    PUT /reports/update/id
//@access   Admin
const updateReport = async (req, res, next) => {
  try {
    const report = await model.Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!report) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: report
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Delete report
//@route    DELETE /reports/delete/id
//@access   Admin
const deleteReport = async (req, res, next) => {
  try {
    const report = await model.Report.findByIdAndDelete(req.params.id);

    if (!report) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }};


module.exports = {
  getAllReports,
  getOneReport,
  createReports,
  updateReport,
  deleteReport
 
}