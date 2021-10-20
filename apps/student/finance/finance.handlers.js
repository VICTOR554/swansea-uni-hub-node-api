const model = require('../../../models/model');

//@des      get all finances
//@route    GET /finances
//@access   Student
const getAllFinances = async (req, res, next) => {
  try {
    const finance = await model.Finance.find();

    res.status(200).json({
      success: true,
      count: finance.length,
      data: finance
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one finance
//@route    GET /finances/:id
//@access   Student
const getOneFinance = async (req, res, next) => {
  try {
    const finance = await model.Finance.findById(req.params.id);

    if (!finance) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: finance
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};


module.exports = {
  getAllFinances,
  getOneFinance,
};
