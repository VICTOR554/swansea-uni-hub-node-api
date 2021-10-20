const model = require('../../../models/model');

//@des      get all finances
//@route    GET /finances
//@access   Admin
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
//@access   Admin
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

//@des      Create finances
//@route    POST /finances/new
//@access   Admin
const createFinances = async (req, res, next) => {
  try {
    const finance = await model.Finance.create(req.body);

    res.status(201).json({
      success: true,
      data: finance
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update finance
//@route    PUT /finances/update/id
//@access   Admin
const updateFinance = async (req, res, next) => {
  try {
    const finance = await model.Finance.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

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

//@des      Delete finance
//@route    DELETE /finances/delete/id
//@access   Admin
const deleteFinance = async (req, res, next) => {
  try {
    const finance = await model.Finance.findByIdAndDelete(req.params.id);

    if (!finance) {
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
  getAllFinances,
  getOneFinance,
  createFinances,
  updateFinance,
  deleteFinance
};
