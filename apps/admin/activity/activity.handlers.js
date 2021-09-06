
//@des      get all activities
//@route    GET /activities
//@access   Activity
const getAllActivities = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all activities`});
  };

//@des      get one activities
//@route    GET /activities/:id
//@access   Activity
const getOneActivity = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get activity ${req.params.id}`});
  };

//@des      Create activity
//@route    POST /activities/new
//@access   Activity
const createActivities = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new activities`});
  };

//@des      Update activity
//@route    PUT /activities/update/id
//@access   Activity
const updateActivity = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update activity ${req.params.id}`});
  };

//@des      Delete activity
//@route    DELETE /activities/delete/id
//@access   Activity
const deleteActivity = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete activity ${req.params.id}`});
};


module.exports = {
  getAllActivities,
  getOneActivity,
  createActivities,
  updateActivity,
  deleteActivity
 
}