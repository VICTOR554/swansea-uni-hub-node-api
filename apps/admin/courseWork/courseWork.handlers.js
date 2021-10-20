const model = require('../../../models/model');

//@des      get all courseWorks
//@route    GET /courseWorks
//@access   Admin
const getAllCourseWorks= async (req, res, next) => {
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

//@des      get one courseWork
//@route    GET /courseWorks/:id
//@access   Admin
const getOneCourseWork = async (req, res, next) => {
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

//@des      Create courseWorks
//@route    POST /courseWorks/new
//@access   Admin
const createCourseWorks = async (req, res, next) => {
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

//@des      Update courseWork
//@route    PUT /courseWorks/update/id
//@access   Admin
const updateCourseWork = async (req, res, next) => {
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

//@des      Delete courseWork
//@route    DELETE /courseWorks/delete/id
//@access   Admin
const deleteCourseWork = async (req, res, next) => {
  try {
    const course = await model.Course.findByIdAndDelete(req.params.id);

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
  getAllCourseWorks,
  getOneCourseWork,
  createCourseWorks,
  updateCourseWork,
  deleteCourseWork
};
