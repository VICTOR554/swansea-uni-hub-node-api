const model = require('../../../models/model');

//@des      get all lecturer
//@route    GET /lecturers
//@access   Admin
const getAllLecturers = async (req, res, next) => { 
  try {
    const lecturer = await model.Lecturer.find();

    res.status(200).json({
      success: true,
      count: lecturer.length,
      data: lecturer
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      get one lecturer
//@route    GET /lecturers/:id
//@access   Admin
const getOneLecturer = async (req, res, next) => {
  try {
    const lecturer = await model.Lecturer.findById(req.params.id);

    if (!lecturer) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: lecturer
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Create lecturers
//@route    POST /lecturers/new
//@access   Admin
const createLecturers = async (req, res, next) => {
  try {
    const lecturer = await model.Lecturer.create(req.body);

    res.status(201).json({
      success: true,
      data: lecturer
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Update lecturer
//@route    PUT /lecturers/update/id
//@access   Admin
const updateLecturer = async (req, res, next) => {
  try {
    const lecturer = await model.Lecturer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!lecturer) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: lecturer
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Delete lecturer
//@route    DELETE /lecturers/delete/id
//@access   Admin
const deleteLecturer = async (req, res, next) => {
  try {
    const lecturer = await model.Lecturer.findByIdAndDelete(req.params.id);

    if (!lecturer) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }};


module.exports = {
  getAllLecturers,
  getOneLecturer,
  createLecturers,
  updateLecturer,
  deleteLecturer
 
}