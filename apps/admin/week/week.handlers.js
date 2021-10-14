const model = require('../../../models/model');

//@des      get all weeks
//@route    GET /weeks
//@access   Admin
const getAllWeeks = async (req, res, next) => { 
  try {
    const week = await model.Week.find();

    res.status(200).json({
      success: true,
      count: week.length,
      data: week
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      get one week
//@route    GET /weeks/:id
//@access   Admin
const getOneWeek = async (req, res, next) => {
  try {
    const week = await model.Week.findById(req.params.id);

    if (!week) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: week
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Create weeks
//@route    POST /weeks/new
//@access   Admin
const createWeeks = async (req, res, next) => {
  try {
    const week = await model.Week.create(req.body);

    res.status(201).json({
      success: true,
      data: week
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Update week
//@route    PUT /weeks/update/id
//@access   Admin
const updateWeek = async (req, res, next) => {
  try {
    const week = await model.Week.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!week) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: week
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Delete week
//@route    DELETE /weeks/delete/id
//@access   Admin
const deleteWeek = async (req, res, next) => {
  try {
    const week = await model.Week.findByIdAndDelete(req.params.id);

    if (!week) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }};


module.exports = {
  getAllWeeks,
  getOneWeek,
  createWeeks,
  updateWeek,
  deleteWeek
 
}