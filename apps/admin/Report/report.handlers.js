
//@des      get all reports
//@route    GET /reports
//@access   Admin
const getAllReports = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all reports`});
  };

//@des      get one report
//@route    GET /reports/:id
//@access   Admin
const getOneReport = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get report ${req.params.id}`});
  };

//@des      Create reports
//@route    POST /reports/new
//@access   Admin
const createReports = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new reports`});
  };

//@des      Update report
//@route    PUT /reports/update/id
//@access   Admin
const updateReport = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update report ${req.params.id}`});
  };

//@des      Delete report
//@route    DELETE /reports/delete/id
//@access   Admin
const deleteReport = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete report ${req.params.id}`});
};


module.exports = {
  getAllReports,
  getOneReport,
  createReports,
  updateReport,
  deleteReport
 
}