const model = require('../../../models/model');

//@des      get all sports
//@route    GET /sports
//@access   Student 
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
//@access   Student
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
module.exports = {
  getAllSports,
  getOneSport
};
