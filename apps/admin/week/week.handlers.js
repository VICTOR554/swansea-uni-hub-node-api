
//@des      get all weeks
//@route    GET /weeks
//@access   Admin
const getAllWeeks = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all weeks`});
  };

//@des      get one week
//@route    GET /weeks/:id
//@access   Admin
const getOneWeek = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get week ${req.params.id}`});
  };

//@des      Create weeks
//@route    POST /weeks/new
//@access   Admin
const createWeeks = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new weeks`});
  };

//@des      Update week
//@route    PUT /weeks/update/id
//@access   Admin
const updateWeek = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update week ${req.params.id}`});
  };

//@des      Delete week
//@route    DELETE /weeks/delete/id
//@access   Admin
const deleteWeek = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete week ${req.params.id}`});
};


module.exports = {
  getAllWeeks,
  getOneWeek,
  createWeeks,
  updateWeek,
  deleteWeek
 
}