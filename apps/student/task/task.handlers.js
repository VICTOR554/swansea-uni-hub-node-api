const model = require('../../../models/model');

//@des      get all tasks
//@route    GET /tasks
//@access   Student
const getAllTasks = async (req, res, next) => { 
  try {
    const task = await model.Task.find();

    res.status(200).json({
      success: true,
      count: task.length,
      data: task
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      get one task
//@route    GET /tasks/:id
//@access   Student
const getOneTask = async (req, res, next) => {
  try {
    const task = await model.Task.findById(req.params.id);

    if (!task) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: task
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Create tasks
//@route    POST /tasks/new
//@access   Student
const createTasks = async (req, res, next) => {
  try {
    const task = await model.Task.create(req.body);

    res.status(201).json({
      success: true,
      data: task
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Update task
//@route    PUT /tasks/update/id
//@access   Student
const updateTask = async (req, res, next) => {
  try {
    const task = await model.Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!task) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: task
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Delete task
//@route    DELETE /tasks/delete/id
//@access   Student
const deleteTask = async (req, res, next) => {
  try {
    const task = await model.Task.findByIdAndDelete(req.params.id);

    if (!task) {
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
  getAllTasks,
  getOneTask,
  createTasks,
  updateTask,
  deleteTask
 
}