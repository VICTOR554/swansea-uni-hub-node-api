const model = require('../../../models/model');

//@des      get all campuses
//@route    GET /campuses
//@access   Admin 
const getAllCampuses = async (req, res, next) => {
  try {
    const campus = await model.Campus.find();

    res.status(200).json({
      success: true,
      count: campus.length,
      data: campus
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one campus
//@route    GET /campuses/:id
//@access   Admin
const getOneCampus = async (req, res, next) => {
  try {
    const campus = await model.Campus.findById(req.params.id);

    if (!campus) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: campus
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create campuses
//@route    POST /campuses/new
//@access   Admin
const createCampuses= async (req, res, next) => {
  try {
    const campus = await model.Campus.create(req.body);

    res.status(201).json({
      success: true,
      data: campus
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update campus
//@route    PUT /campuses/update/id
//@access   Admin
const updateCampus = async (req, res, next) => {
  try {
    const campus = await model.Campus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!campus) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: campus
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete campus
//@route    DELETE /campuses/delete/id
//@access   Admin
const deleteCampus = async (req, res, next) => {
  try {
    const campus = await model.Campus.findByIdAndDelete(req.params.id);

    if (!campus) {
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
  getAllCampuses,
  getOneCampus,
  createCampuses,
  updateCampus,
  deleteCampus
};
