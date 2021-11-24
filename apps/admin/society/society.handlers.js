const model = require('../../../models/model');

//@des      get all societies
//@route    GET /societies
//@access   Admin 
const getAllSocieties = async (req, res, next) => {
  try {
    const society = await model.Society.find();

    res.status(200).json({
      success: true,
      count: society.length,
      data: society
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one society
//@route    GET /societies/:id
//@access   Admin
const getOneSociety= async (req, res, next) => {
  try {
    const society = await model.Society.findById(req.params.id);

    if (!society) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: society
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create societies
//@route    POST /societies/new
//@access   Admin
const createSocieties = async (req, res, next) => {
  try {
    const society = await model.Society.create(req.body);

    res.status(201).json({
      success: true,
      data: society
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update society
//@route    PUT /societies/update/id
//@access   Admin
const updateSociety= async (req, res, next) => {
  try {
    const society = await model.Society.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!society) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: society
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete society
//@route    DELETE /societies/delete/id
//@access   Admin
const deleteSociety = async (req, res, next) => {
  try {
    const society = await model.Society.findByIdAndDelete(req.params.id);

    if (!society) {
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
  getAllSocieties,
  getOneSociety,
  createSocieties,
  updateSociety,
  deleteSociety
};
