
//@des      get all tasks
//@route    GET /tasks
//@access   Task
const getAllTasks = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all tasks`});
  };

//@des      get one task
//@route    GET /tasks/:id
//@access   Task
const getOneTask = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get task ${req.params.id}`});
  };

//@des      Create tasks
//@route    POST /tasks/new
//@access   Task
const createTasks = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new tasks`});
  };

//@des      Update task
//@route    PUT /tasks/update/id
//@access   Task
const updateTask = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update task ${req.params.id}`});
  };

//@des      Delete task
//@route    DELETE /tasks/delete/id
//@access   Task
const deleteTask = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete task ${req.params.id}`});
};


module.exports = {
  getAllTasks,
  getOneTask,
  createTasks,
  updateTask,
  deleteTask
 
}