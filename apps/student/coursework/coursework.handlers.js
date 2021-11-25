const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all courseworks
//@route    GET /courseworks
//@access   Student
const getAllCourseworks = asyncHandler(async (req, res, next) => {
  const coursework = await model.Coursework.find();

  res.status(200).json({
    success: true,
    count: coursework.length,
    data: coursework
  });
});

//@des      get one coursework
//@route    GET /courseworks/:id
//@access   Student
const getOneCoursework = asyncHandler(async (req, res, next) => {
  const coursework = await model.Coursework.findById(req.params.id);

  if (!coursework) {
    return next(new ErrorResponse(`Coursework is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: coursework
  });
});

module.exports = {
  getAllCourseworks,
  getOneCoursework
};
