const ErrorResponse = require('../../../utils/errorResponse');
const model = require('../../../models/model');

//@des      get all students
//@route    GET /students
//@access   Admin
const getAllStudents = async (req, res, next) => {
  try {
    const student = await model.Student.find();

    res.status(200).json({
      success: true,
      count: student.length,
      data: student
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one student
//@route    GET /students/:id
//@access   Admin
const getOneStudent = async (req, res, next) => {
  try {
    const student = await model.Student.findById(req.params.id);

    if (!student) {
      return     next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));

    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (err) {
    next(err);

  }
};

//@des      Create students
//@route    POST /students/new
//@access   Admin
const createStudents = async (req, res, next) => {
  try {
    const student = await model.Student.create(req.body);

    res.status(201).json({
      success: true,
      data: student
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update student
//@route    PUT /students/update/id
//@access   Admin
const updateStudent = async (req, res, next) => {
  try {
    const student = await model.Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!student) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete student
//@route    DELETE /students/delete/id
//@access   Admin
const deleteStudent = async (req, res, next) => {
  try {
    const student = await model.Student.findByIdAndDelete(req.params.id);

    if (!student) {
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
  getAllStudents,
  getOneStudent,
  createStudents,
  updateStudent,
  deleteStudent
};
