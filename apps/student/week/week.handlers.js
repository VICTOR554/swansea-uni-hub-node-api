
//@des      get all weeks
//@route    GET /weeks
//@access   Student
const getAllWeeks = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all weeks`});
  };

//@des      get one week
//@route    GET /weeks/:id
//@access   Student
const getOneWeek = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get week ${req.params.id}`});
  };

module.exports = {
  getAllWeeks,
  getOneWeek,

 
}