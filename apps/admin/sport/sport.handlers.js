const model = require('../../../models/model');

//@des      get all sports
//@route    GET /sports
//@access   Admin 
const getAllSports = async (req, res, next) => {
  try {
    const sport = await model.Sport.find();

    res.status(200).json({
      success: true,
      count: sport.length,
      data: sport
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one sport
//@route    GET /sports/:id
//@access   Admin
const getOneSport = async (req, res, next) => {
  try {
    const sport = await model.Sport.findById(req.params.id);

    if (!sport) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: sport
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create sports
//@route    POST /sports/new
//@access   Admin
const createSports = async (req, res, next) => {
  try {
    const sport = await model.Sport.create(req.body);

    res.status(201).json({
      success: true,
      data: sport
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update sport
//@route    PUT /sports/update/id
//@access   Admin
const updateSport = async (req, res, next) => {
  try {
    const sport = await model.Sport.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!sport) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: sport
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete sport
//@route    DELETE /sports/delete/id
//@access   Admin
const deleteSport = async (req, res, next) => {
  try {
    const sport = await model.Sport.findByIdAndDelete(req.params.id);

    if (!sport) {
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
  getAllSports,
  getOneSport,
  createSports,
  updateSport,
  deleteSport
};
