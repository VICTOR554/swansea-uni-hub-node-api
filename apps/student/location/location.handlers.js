
//@des      get all locations
//@route    GET /locations
//@access   Admin
const getAllLocations = (req, res, next) => { 
  res.status(200).json({ success: true, msg: `Show all locations`});
};

//@des      get one location
//@route    GET /locations/:id
//@access   Admin
const getOneLocation = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get location ${req.params.id}`});
};



module.exports = {
getAllLocations,
getOneLocation,


}