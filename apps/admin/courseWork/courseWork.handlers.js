const model = require('../../../models/model');

//@des      get all courseworks
//@route    GET /courseworks
//@access   Admin
const getAllCourseworks= async (req, res, next) => {
  try {
    const coursework = await model.Coursework.find();

    res.status(200).json({
      success: true,
      count: coursework.length,
      data: coursework
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one coursework
//@route    GET /courseworks/:id
//@access   Admin
const getOneCoursework = async (req, res, next) => {
  try {
    const coursework = await model.Coursework.findById(req.params.id);

    if (!coursework) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: coursework
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create courseworks
//@route    POST /courseworks/new
//@access   Admin
const createCourseworks = async (req, res, next) => {
  try {
    const coursework = await model.Coursework.create(req.body);

    res.status(201).json({
      success: true,
      data: coursework
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update coursework
//@route    PUT /courseworks/update/id
//@access   Admin
const updateCoursework = async (req, res, next) => {
  try {
    const coursework = await model.Coursework.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!coursework) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: coursework
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete coursework
//@route    DELETE /courseworks/delete/id
//@access   Admin
const deleteCoursework = async (req, res, next) => {
  try {
    const coursework = await model.Coursework.findByIdAndDelete(req.params.id);

    if (!coursework) {
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
  getAllCourseworks,
  getOneCoursework,
  createCourseworks,
  updateCoursework,
  deleteCoursework
};
