const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all lecturer
//@route    GET /lecturers
//@access   Student
const getAllLecturers = asyncHandler(async (req, res, next) => {
  const lecturer = await model.Lecturer.find();

  res.status(200).json({
    success: true,
    count: lecturer.length,
    data: lecturer
  });
});

//@des      get one lecturer
//@route    GET /lecturers/:id
//@access   Student
const getOneLecturer = asyncHandler(async (req, res, next) => {
  const lecturer = await model.Lecturer.findById(req.params.id);

  if (!lecturer) {
    return res.status(400).json({ success: false });
  }

  res.status(200).json({
    success: true,
    data: lecturer
  });
});

module.exports = {
  getAllLecturers,
  getOneLecturer
};
