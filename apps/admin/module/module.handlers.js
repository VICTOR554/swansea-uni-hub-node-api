//@des      get all modules
//@route    GET /modules
//@access   Student
const getAllModules = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all modules`});
  };

//@des      get one students
//@route    GET /modules/:id
//@access   Student
const getOneModule = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get modules ${req.params.id}`});
  };

//@des      Create modules
//@route    POST /modules/new
//@access   Student
const createModules = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new modules`});
  };

//@des      Update module
//@route    PUT /modules/update/id
//@access   Student
const updateModule = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update modules ${req.params.id}`});
  };

//@des      Delete module
//@route    DELETE /modules/delete/id
//@access   Student
const deleteModule = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete modules ${req.params.id}`});
};


module.exports = {
  getAllModules,
  getOneModule,
  createModules,
  updateModule,
  deleteModule
 
}