const model = require('../../../models/model');

//@des      get all societies
//@route    GET /societies
//@access   Student 
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
//@access   Student
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


module.exports = {
  getAllSocieties,
  getOneSociety
};
