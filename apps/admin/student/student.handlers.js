
//@des      get all students
//@route    GET /students
//@access   Student
const getAllStudents = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show all students`});
  };

//@des      get one students
//@route    GET /students/:id
//@access   Student
const getOneStudent = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get student ${req.params.id}`});
  };

//@des      Create student
//@route    GET /students/new
//@access   Student
const createStudents = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new students`});
  };

//@des      Update student
//@route    GET /students/update/id
//@access   Student
const updateStudent = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update student ${req.params.id}`});
  };

//@des      Delete student
//@route    GET /students/delete/id
//@access   Student
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