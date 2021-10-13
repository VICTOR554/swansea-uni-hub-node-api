const model = require('../../../models/model');

//@des      get all courses
//@route    GET /courses
//@access   Admin
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
//@access   Admin
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

//@des      Create courses
//@route    POST /courses/new
//@access   Admin
const createCourses = async (req, res, next) => {
  try {
    const course = await model.Course.create(req.body);

    res.status(201).json({
      success: true,
      data: course
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update course
//@route    PUT /courses/update/id
//@access   Admin
const updateCourse = async (req, res, next) => {
  try {
    const course = await model.Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

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

//@des      Delete course
//@route    DELETE /courses/delete/id
//@access   Admin
const deleteCourse = async (req, res, next) => {
  try {
    const course = await model.Activity.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

module.exports = {
  getAllCourses,
  getOneCourse,
  createCourses,
  updateCourse,
  deleteCourse
};
