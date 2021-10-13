const model = require('../../../models/model');

//@des      get all locations
//@route    GET /locations
//@access   Admin
const getAllLocations = async (req, res, next) => {
  try {
    const location = await model.Location.find();

    res.status(200).json({
      success: true,
      count: location.length,
      data: location
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one location
//@route    GET /locations/:id
//@access   Admin
const getOneLocation = async (req, res, next) => {
  try {
    const location = await model.Location.findById(req.params.id);

    if (!location) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: location
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create locations
//@route    POST /locations/new
//@access   Admin
const createLocations = async (req, res, next) => {
  try {
    const location = await model.Location.create(req.body);

    res.status(201).json({
      success: true,
      data: location
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update location
//@route    PUT /locations/update/id
//@access   Admin
const updateLocation = async (req, res, next) => {
  try {
    const location = await model.Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!location) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: location
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete location
//@route    DELETE /locations/delete/id
//@access   Admin
const deleteLocation = async (req, res, next) => {
  try {
    const location = await model.Location.findByIdAndDelete(req.params.id);

    if (!location) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

module.exports = {
  getAllLocations,
  getOneLocation,
  createLocations,
  updateLocation,
  deleteLocation
};
