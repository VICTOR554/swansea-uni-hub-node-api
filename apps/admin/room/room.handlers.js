const model = require('../../../models/model');

//@des      get all rooms
//@route    GET /rooms
//@access   Admin 
const getAllRooms = async (req, res, next) => {
  try {
    const room = await model.room.find();

    res.status(200).json({
      success: true,
      count: room.length,
      data: room
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one room
//@route    GET /rooms/:id
//@access   Admin
const getOneRoom = async (req, res, next) => {
  try {
    const room = await model.Room.findById(req.params.id);

    if (!room) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: room
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create rooms
//@route    POST /rooms/new
//@access   Admin
const createRooms = async (req, res, next) => {
  try {
    const room = await model.Room.create(req.body);

    res.status(201).json({
      success: true,
      data: room
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update room
//@route    PUT /rooms/update/id
//@access   Admin
const updateRoom = async (req, res, next) => {
  try {
    const room = await model.Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!room) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: room
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete room
//@route    DELETE /rooms/delete/id
//@access   Admin
const deleteRoom = async (req, res, next) => {
  try {
    const room = await model.Room.findByIdAndDelete(req.params.id);

    if (!room) {
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
  getAllRooms,
  getOneRoom,
  createRooms,
  updateRoom,
  deleteRoom
};
