const model = require('../../../models/model');

//@des      get all sessions
//@route    GET /sessions
//@access   Admin
const getAllSessions = async (req, res, next) => { 
  try {
    const session = await model.Session.find();

    res.status(200).json({
      success: true,
      count: session.length,
      data: session
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      get one session
//@route    GET /sessions/:id
//@access   Admin
const getOneSession = async (req, res, next) => {
  try {
    const session = await model.Session.findById(req.params.id);

    if (!session) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: session
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Create sessions
//@route    POST /sessions/new
//@access   Admin
const createSessions = async (req, res, next) => {
  try {
    const session = await model.Session.create(req.body);

    res.status(201).json({
      success: true,
      data: session
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Update session
//@route    PUT /sessions/update/id
//@access   Admin
const updateSession = async (req, res, next) => {
  try {
    const session = await model.Session.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!session) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: session
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Delete session
//@route    DELETE /sessions/delete/id
//@access   Admin
const deleteSession = async (req, res, next) => {
  try {
    const session = await model.Session.findByIdAndDelete(req.params.id);

    if (!session) {
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
  getAllSessions,
  getOneSession,
  createSessions,
  updateSession,
  deleteSession
 
}