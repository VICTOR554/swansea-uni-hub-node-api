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

const getInprogressTasks = asyncHandler(async (req, res, next) => {
  console.log( "number "+req.user.number)

  const task = await model.Task.find({ studentNumber: req.user.number, completed: false}).sort( { createdDateTime: -1 } )

  console.log( "after number "+req.user.number)

  if (!task) {
    return next(new ErrorResponse(`Task is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
     task
  });
});

const getFlaggedTasks = asyncHandler(async (req, res, next) => {

  const task = await model.Task.find({ studentNumber: req.user.number, flagged: true}).sort( { dueDateTime: -1 } )

  if (!task) {
    return next(new ErrorResponse(`Task is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
   task
  });
});

const getCompletedTasks = asyncHandler(async (req, res, next) => {
  date = moment(Date.now(), 'X')

  const task = await model.Task.find({ studentNumber: req.user.number, completed: true}).sort( { createdDateTime: -1 } )

  if (!task) {
    return next(new ErrorResponse(`Task is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    task
  });
});

const getOverdueTasks = asyncHandler(async (req, res, next) => {
  date = moment(Date.now(), 'X')


  const task = await model.Task.find({ studentNumber: req.user.number, completed: false, dueDateTime: {$lt: date} }).sort( { dueDateTime: -1 } )

  if (!task) {
    return next(new ErrorResponse(`Task is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    task
  });
});



//@des      get one task
//@route    GET /tasks/:id
//@access   Student
const getOneTask = asyncHandler(async (req, res, next) => {
  const task = await model.Task.find(req.user.number, req.params.id);

  if (!task) {
    return next(new ErrorResponse(`Task is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
  task
  });
});

//@des      Create tasks
//@route    POST /tasks/new
//@access   Student
const createTasks = asyncHandler(async (req, res, next) => {
  student = {student_number: req.user.number}

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
  getInprogressTasks,
  getFlaggedTasks,
  getCompletedTasks,
  getOverdueTasks,
  getOneTask,
  createTasks,
  updateTask,
  deleteTask
};
