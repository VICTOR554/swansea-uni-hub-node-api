const model = require('../../../models/model');

//@des      get all courses
//@route    GET /courses
//@access   Student
const getAllCourses = async (req, res, next) => {
  try {
    const course = await model.Course.find();

    res.status(200).json({
      success: true,
      count: course.length,
      data: course
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one course
//@route    GET /courses/:id
//@access   Student
const getOneCourse = async (req, res, next) => {
  try {
    const course = await model.Course.findById(req.params.id);

    if (!course) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};



module.exports = {
  getAllCourses,
  getOneCourse
};
