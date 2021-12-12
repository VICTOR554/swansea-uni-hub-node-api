const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');
const moment = require('moment')

//@des      get all tasks
//@route    GET /tasks
//@access   Student
const getAllTasks = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});


const getOverdueTask = asyncHandler(async (req, res, next) => {
  date = moment(Date.now(), 'X')

  const task = await model.Task.find({ dueDateTime: {$lt: date} }).sort( { dueDateTime: -1 } )

  if (!task) {
    return next(new ErrorResponse(`Task is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: task
  });
});



//@des      get one task
//@route    GET /tasks/:id
//@access   Student
const getOneTask = asyncHandler(async (req, res, next) => {
  const task = await model.Task.find(req.params.studentNumber, req.params.id);

  if (!task) {
    return next(new ErrorResponse(`Task is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

//@des      Create tasks
//@route    POST /tasks/new
//@access   Student
const createTasks = asyncHandler(async (req, res, next) => {
  student = {student_number: req.student_number}

  const task = await model.Task.create({ ...req.body, ...student })

  res.status(201).json({
    success: true,
    data: task
  });
});

//@des      Update task
//@route    PUT /tasks/update/id
//@access   Student
const updateTask = asyncHandler(async (req, res, next) => {
  const task = await model.Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!task) {
    return next(new ErrorResponse(`Task is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

//@des      Delete task
//@route    DELETE /tasks/delete/id
//@access   Student
const deleteTask = asyncHandler(async (req, res, next) => {
  const task = await model.Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return next(new ErrorResponse(`Task is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllTasks,
  getOverdueTask,
  getOneTask,
  createTasks,
  updateTask,
  deleteTask
};
