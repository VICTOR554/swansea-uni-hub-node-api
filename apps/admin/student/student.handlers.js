
//@des      get all students
//@route    GET /students
//@access   Admin
const getAllStudents = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all students`});
  };

//@des      get one student
//@route    GET /students/:id
//@access   Admin
const getOneStudent = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get student ${req.params.id}`});
  };

//@des      Create students
//@route    POST /students/new
//@access   Admin
const createStudents = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new students`});
  };

//@des      Update student
//@route    PUT /students/update/id
//@access   Admin
const updateStudent = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update student ${req.params.id}`});
  };

//@des      Delete student
//@route    DELETE /students/delete/id
//@access   Admin
const deleteStudent = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete student ${req.params.id}`});
};


module.exports = {
  getAllStudents,
  getOneStudent,
  createStudents,
  updateStudent,
  deleteStudent
 
}