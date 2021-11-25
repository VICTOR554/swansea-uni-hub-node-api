const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all campuses
//@route    GET /campuses
//@access   Student 
const getAllCampuses = asyncHandler(async (req, res, next) => {
  const campus = await model.Campus.find();

  res.status(200).json({
    success: true,
    count: campus.length,
    data: campus
  });
});

//@des      get one campus
//@route    GET /campuses/:id
//@access   Student
const getOneCampus = asyncHandler(async (req, res, next) => {
  const campus = await model.Campus.findById(req.params.id);

  if (!campus) {
    return next(new ErrorResponse(`Campus is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: campus
  });
});


module.exports = {
  getAllCampuses,
  getOneCampus
};
