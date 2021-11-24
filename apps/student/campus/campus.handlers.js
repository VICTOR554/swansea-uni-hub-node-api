const model = require('../../../models/model');

//@des      get all campuses
//@route    GET /campuses
//@access   Student 
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
//@access   Student
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


module.exports = {
  getAllCampuses,
  getOneCampus
};
