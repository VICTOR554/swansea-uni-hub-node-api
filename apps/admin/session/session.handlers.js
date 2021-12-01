const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all sessions
//@route    GET /sessions
//@access   Admin
const getAllSessions = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one session
//@route    GET /sessions/:id
//@access   Admin
const getOneSession = asyncHandler(async (req, res, next) => {
  const session = await model.Session.findById(req.params.id);

  if (!session) {
    return next(new ErrorResponse(`Session is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: session
  });
});

//@des      Create sessions
//@route    POST /sessions/new
//@access   Admin
const createSessions = asyncHandler(async (req, res, next) => {
  const session = await model.Session.create(req.body);

  res.status(201).json({
    success: true,
    data: session
  });
});

//@des      Update session
//@route    PUT /sessions/update/id
//@access   Admin
const updateSession = asyncHandler(async (req, res, next) => {
  const session = await model.Session.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!session) {
    return next(new ErrorResponse(`Session is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: session
  });
});

//@des      Delete session
//@route    DELETE /sessions/delete/id
//@access   Admin
const deleteSession = asyncHandler(async (req, res, next) => {
  const session = await model.Session.findByIdAndDelete(req.params.id);

  if (!session) {
    return next(new ErrorResponse(`Session is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllSessions,
  getOneSession,
  createSessions,
  updateSession,
  deleteSession
};
