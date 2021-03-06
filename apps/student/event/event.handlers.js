const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all events
//@route    GET /events
//@access   Student
const getAllEvents = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one event
//@route    GET /events/:id
//@access   Student
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

module.exports = {
  getAllEvents,
  getOneEvent
};
