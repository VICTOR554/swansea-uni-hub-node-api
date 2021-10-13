const model = require('../../../models/model');

//@des      get all modules
//@route    GET /modules
//@access   Admin
const getAllModules = async (req, res, next) => {
  try {
    const module = await model.Module.find();

    res.status(200).json({
      success: true,
      count: module.length,
      data: module
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one module
//@route    GET /modules/:id
//@access   Admin
const getOneModule = async (req, res, next) => {
  try {
    const module = await model.Module.findById(req.params.id);

    if (!module) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: module
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create modules
//@route    POST /modules/new
//@access   Admin
const createModules = async (req, res, next) => {
  try {
    const module = await model.Module.create(req.body);

    res.status(201).json({
      success: true,
      data: module
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update module
//@route    PUT /modules/update/id
//@access   Admin
const updateModule = async (req, res, next) => {
  try {
    const module = await model.Module.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!module) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: module
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete module
//@route    DELETE /modules/delete/id
//@access   Admin
const deleteModule = async (req, res, next) => {
  try {
    const module = await model.Module.findByIdAndDelete(req.params.id);

    if (!module) {
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
  getAllModules,
  getOneModule,
  createModules,
  updateModule,
  deleteModule
};
