
//@des      get all courses
//@route    GET /courses
//@access   Admin
const getAllCourses = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all courses`});
  };

//@des      get one course
//@route    GET /courses/:id
//@access   Admin
const getOneCourse = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get course ${req.params.id}`});
  };

//@des      Create courses
//@route    POST /courses/new
//@access   Admin
const createCourses = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new courses`});
  };

//@des      Update course
//@route    PUT /courses/update/id
//@access   Admin
const updateCourse = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update course ${req.params.id}`});
  };

//@des      Delete course
//@route    DELETE /courses/delete/id
//@access   Admin
const deleteCourse = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete course ${req.params.id}`});
};


module.exports = {
  getAllCourses,
  getOneCourse,
  createCourses,
  updateCourse,
  deleteCourse
 
}