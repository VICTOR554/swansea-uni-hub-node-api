const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all rooms
//@route    GET /rooms
//@access   Admin
const getAllRooms = asyncHandler(async (req, res, next) => {
  const room = await model.room.find();

  res.status(200).json({
    success: true,
    count: room.length,
    data: room
  });
});

//@des      get one room
//@route    GET /rooms/:id
//@access   Admin
const getOneRoom = asyncHandler(async (req, res, next) => {
  const room = await model.Room.findById(req.params.id);

  if (!room) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: room
  });
});

//@des      Create rooms
//@route    POST /rooms/new
//@access   Admin
const createRooms = asyncHandler(async (req, res, next) => {
  const room = await model.Room.create(req.body);

  res.status(201).json({
    success: true,
    data: room
  });
});

//@des      Update room
//@route    PUT /rooms/update/id
//@access   Admin
const updateRoom = asyncHandler(async (req, res, next) => {
  const room = await model.Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!room) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: room
  });
});

//@des      Delete room
//@route    DELETE /rooms/delete/id
//@access   Admin
const deleteRoom = asyncHandler(async (req, res, next) => {
  const room = await model.Room.findByIdAndDelete(req.params.id);

  if (!room) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllRooms,
  getOneRoom,
  createRooms,
  updateRoom,
  deleteRoom
};
