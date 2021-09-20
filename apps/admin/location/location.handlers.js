
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

//@des      Create locations
//@route    POST /locations/new
//@access   Admin
const createLocations = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create new locations`});
};

//@des      Update location
//@route    PUT /locations/update/id
//@access   Admin
const updateLocation = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update location ${req.params.id}`});
};

//@des      Delete location
//@route    DELETE /locations/delete/id
//@access   Admin
const deleteLocation = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete location ${req.params.id}`});
};


module.exports = {
getAllLocations,
getOneLocation,
createLocations,
updateLocation,
deleteLocation

}