const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');
//@des      get all events
//@route    GET /events
//@access   Admin
const getAllEvents = asyncHandler(async (req, res, next) => {
  const event = await model.Event.find();

  res.status(200).json({
    success: true,
    count: event.length,
    data: event
  });
});

//@des      get one event
//@route    GET /events/:id
//@access   Admin
const getOneEvent = asyncHandler(async (req, res, next) => {
  const event = await model.Event.findById(req.params.id);

  if (!event) {
    return next(new ErrorResponse(`Event is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: event
  });
});

//@des      Create events
//@route    POST /events/new
//@access   Admin
const createEvents = asyncHandler(async (req, res, next) => {
  const event = await model.Event.create(req.body);

  res.status(201).json({
    success: true,
    data: event
  });
});

//@des      Update event
//@route    PUT /events/update/id
//@access   Admin
const updateEvent = asyncHandler(async (req, res, next) => {
  const event = await model.Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!event) {
    return next(new ErrorResponse(`Event is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: event
  });
});

//@des      Delete event
//@route    DELETE /events/delete/id
//@access   Admin
const deleteEvent = asyncHandler(async (req, res, next) => {
  const event = await model.Event.findByIdAndDelete(req.params.id);

  if (!event) {
    return next(new ErrorResponse(`Event is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllEvents,
  getOneEvent,
  createEvents,
  updateEvent,
  deleteEvent
};
