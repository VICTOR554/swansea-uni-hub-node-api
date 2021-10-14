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


module.exports = {
  getAllModules,
  getOneModule
};
