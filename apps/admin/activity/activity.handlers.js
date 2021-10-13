const model = require('../../../models/model');

//@des      get all activities
//@route    GET /activities
//@access   Admin
const getAllActivities = async (req, res, next) => {
  try {
    const activity = await model.Activity.find();

    res.status(200).json({
      success: true,
      count: activity.length,
      data: activity
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one activities
//@route    GET /activities/:id
//@access   Admin
const getOneActivity = async (req, res, next) => {
  try {
    const activity = await model.Activity.findById(req.params.id);

    if (!activity) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: activity
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create activity
//@route    POST /activities/new
//@access   Admin
const createActivities = async (req, res, next) => {
  try {
    const activity = await model.Activity.create(req.body);

    res.status(201).json({
      success: true,
      data: activity
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update activity
//@route    PUT /activities/update/id
//@access   Admin
const updateActivity = async (req, res, next) => {
  try {
    const activity = await model.Activity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!activity) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: activity
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete activity
//@route    DELETE /activities/delete/id
//@access   Admin
const deleteActivity = async (req, res, next) => {
  try {
    const activity = await model.Activity.findByIdAndDelete(req.params.id);

    if (!activity) {
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
  getAllActivities,
  getOneActivity,
  createActivities,
  updateActivity,
  deleteActivity
};
