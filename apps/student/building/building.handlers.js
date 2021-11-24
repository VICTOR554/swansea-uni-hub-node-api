const model = require('../../../models/model');

//@des      get all buildings
//@route    GET /buildings
//@access   Student
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
//@access   Student
const getOneBuilding = async (req, res, next) => {
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

module.exports = {
  getAllBuildings,
  getOneBuilding
};
