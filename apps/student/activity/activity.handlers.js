
//@des      get all activities
//@route    GET /activities
//@access   Student
const getAllActivities = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all activities`});
  };

//@des      get one activities
//@route    GET /activities/:id
//@access   Student
const getOneActivity = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get activity ${req.params.id}`});
  };




module.exports = {
  getAllActivities,
  getOneActivity,
  
 
}