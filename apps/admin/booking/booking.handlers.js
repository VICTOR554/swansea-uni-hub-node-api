const model = require('../../../models/model');

//@des      get all bookings 
//@route    GET /bookings
//@access   Admin 
const getAllBookings = async (req, res, next) => {
  try {
    const booking = await model.Booking.find();

    res.status(200).json({
      success: true,
      count: booking.length,
      data: booking
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one booking
//@route    GET /bookings/:id
//@access   Admin
const getOneBooking= async (req, res, next) => {
  try {
    const booking = await model.Booking.findById(req.params.id);

    if (!booking) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create bookings
//@route    POST /bookings/new
//@access   Admin
const createBookings = async (req, res, next) => {
  try {
    const booking = await model.Booking.create(req.body);

    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update booking
//@route    PUT /bookings/update/id
//@access   Admin
const updateBooking = async (req, res, next) => {
  try {
    const booking = await model.Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!booking) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete book
//@route    DELETE /Bookings/delete/id
//@access   Admin
const deleteBooking = async (req, res, next) => {
  try {
    const booking = await model.Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
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
  getAllBookings,
  getOneBooking,
  createBookings,
  updateBooking,
  deleteBooking
};
