
//@des      get all lecturer
//@route    GET /lecturers
//@access   Admin
const getAllLecturers = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all lecturers`});
  };

//@des      get one lecturer
//@route    GET /lecturers/:id
//@access   Admin
const getOneLecturer = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get lecturer ${req.params.id}`});
  };

//@des      Create lecturers
//@route    POST /lecturers/new
//@access   Admin
const createLecturers = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new lecturers`});
  };

//@des      Update lecturer
//@route    PUT /lecturers/update/id
//@access   Admin
const updateLecturer = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update lecturer ${req.params.id}`});
  };

//@des      Delete lecturer
//@route    DELETE /lecturers/delete/id
//@access   Admin
const deleteLecturer = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete lecturer ${req.params.id}`});
};


module.exports = {
  getAllLecturers,
  getOneLecturer,
  createLecturers,
  updateLecturer,
  deleteLecturer
 
}