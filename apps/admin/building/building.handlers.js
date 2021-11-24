const model = require('../../../models/model');

//@des      get all buildings 
//@route    GET /buildings
//@access   Admin 
const getAllBuildings = async (req, res, next) => {
  try {
    const building = await model.Building.find();

    res.status(200).json({
      success: true,
      count: building.length,
      data: building
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one building
//@route    GET /buildings/:id
//@access   Admin
const getOneBuilding= async (req, res, next) => {
  try {
    const building = await model.Building.findById(req.params.id);

    if (!building) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: building
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create buildings
//@route    POST /buildings/new
//@access   Admin
const createBuildings = async (req, res, next) => {
  try {
    const building = await model.Building.create(req.body);

    res.status(201).json({
      success: true,
      data: building
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update building
//@route    PUT /buildings/update/id
//@access   Admin
const updateBuilding = async (req, res, next) => {
  try {
    const building = await model.Building.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!building) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: building
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete building
//@route    DELETE /buildings/delete/id
//@access   Admin
const deleteBuilding = async (req, res, next) => {
  try {
    const building = await model.Building.findByIdAndDelete(req.params.id);

    if (!building) {
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
  getAllBuildings,
  getOneBuilding,
  createBuildings,
  updateBuilding,
  deleteBuilding
};
