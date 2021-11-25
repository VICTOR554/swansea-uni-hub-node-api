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
    return next(new ErrorResponse(`Room is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: room
  });
});

module.exports = {
  getAllRooms,
  getOneRoom
};
