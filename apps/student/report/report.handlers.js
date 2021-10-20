const model = require('../../../models/model');

//@des      get all reports
//@route    GET /reports
//@access   Student
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
//@access   Student
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


module.exports = {
  getAllReports,
  getOneReport,

 
}