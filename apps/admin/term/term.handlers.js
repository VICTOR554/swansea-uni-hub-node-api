const model = require('../../../models/model');

//@des      get all terms
//@route    GET /terms
//@access   Admin
const getAllTerms = async (req, res, next) => { 
  try {
    const term = await model.Term.find();

    res.status(200).json({
      success: true,
      count: term.length,
      data: term
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      get one term
//@route    GET /terms/:id
//@access   Admin
const getOneTerm = async (req, res, next) => {
  try {
    const term = await model.Term.findById(req.params.id);

    if (!term) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: term
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Create terms
//@route    POST /terms/new
//@access   Admin
const createTerms = async (req, res, next) => {
  try {
    const term = await model.Term.create(req.body);

    res.status(201).json({
      success: true,
      data: term
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Update term
//@route    PUT /terms/update/id
//@access   Admin
const updateTerm = async (req, res, next) => {
  try {
    const term = await model.Term.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!term) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: term
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Delete term
//@route    DELETE /terms/delete/id
//@access   Admin
const deleteTerm = async (req, res, next) => {
  try {
    const term = await model.Term.findByIdAndDelete(req.params.id);

    if (!term) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }};


module.exports = {
  getAllTerms,
  getOneTerm,
  createTerms,
  updateTerm,
  deleteTerm
 
}