const model = require('../../../models/model');

//@des      get all activities
//@route    GET /activities
//@access   Student
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
//@access   Student
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



module.exports = {
  getAllActivities,
  getOneActivity
};
