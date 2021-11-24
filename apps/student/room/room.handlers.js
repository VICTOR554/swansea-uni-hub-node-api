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


module.exports = {
  getAllRooms,
  getOneRoom
};
