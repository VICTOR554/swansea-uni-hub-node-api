const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all bookings
//@route    GET /bookings
//@access   Student
const getAllBookings = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one booking
//@route    GET /bookings/:id
//@access   Student
const getOneBooking = asyncHandler(async (req, res, next) => {
  const booking = await model.Booking.findById(req.params.id);

  if (!booking) {
    return next(new ErrorResponse(`Booking is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: booking
  });
});

//@des      Create bookings
//@route    POST /bookings/new
//@access   Student
const createBookings = asyncHandler(async (req, res, next) => {
  const booking = await model.Booking.create(req.body);

  res.status(201).json({
    success: true,
    data: booking
  });
});

//@des      Update booking
//@route    PUT /bookings/update/id
//@access   Student
const updateBooking = asyncHandler(async (req, res, next) => {
  const booking = await model.Booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!booking) {
    return next(new ErrorResponse(`Booking is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: booking
  });
});
//@des      Delete book
//@route    DELETE /Bookings/delete/id
//@access   Student
const deleteBooking = asyncHandler(async (req, res, next) => {
  const booking = await model.Booking.findByIdAndDelete(req.params.id);

  if (!booking) {
    return next(new ErrorResponse(`Booking is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllBookings,
  getOneBooking,
  createBookings,
  updateBooking,
  deleteBooking
};
