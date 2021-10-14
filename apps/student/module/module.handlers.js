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




module.exports = {
  getAllModules,
  getOneModule,
  createModules,
  updateModule,
  deleteModule
 
}