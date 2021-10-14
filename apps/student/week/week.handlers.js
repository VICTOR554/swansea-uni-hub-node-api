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



module.exports = {
  getAllWeeks,
  getOneWeek
 
}