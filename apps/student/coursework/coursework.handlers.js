const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');
const moment = require('moment')


//@des      get all courseworks
//@route    GET /courseworks
//@access   Student
const getAllCourseworks = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

const getCurrentCoursework = asyncHandler(async (req, res, next) => {
  date = moment(Date.now(), 'X')
  const coursework = await model.Coursework.find({dueDateTime: {$gt: date}}).sort( { dueDateTime: -1 } )

  if (!coursework) {
    return next(new ErrorResponse(`Coursework is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: coursework
  });
});

const getPastCoursework = asyncHandler(async (req, res, next) => {
  date = moment(Date.now(), 'X')

  const coursework = await model.Coursework.find({dueDateTime: {$lt: date}}).sort( { dueDateTime: -1 } );

  if (!coursework) {
    return next(new ErrorResponse(`Coursework is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
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
  getCurrentCoursework,
  getPastCoursework,
  getOneCoursework
};
