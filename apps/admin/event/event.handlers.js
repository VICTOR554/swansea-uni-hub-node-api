const model = require('../../../models/model');

//@des      get all events
//@route    GET /events
//@access   Admin 
const getAllEvents = async (req, res, next) => {
  try {
    const event = await model.Event.find();

    res.status(200).json({
      success: true,
      count: event.length,
      data: event
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one event
//@route    GET /events/:id
//@access   Admin
const getOneEvent= async (req, res, next) => {
  try {
    const event = await model.Event.findById(req.params.id);

    if (!event) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: event
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Create events
//@route    POST /events/new
//@access   Admin
const createEvents = async (req, res, next) => {
  try {
    const event = await model.Event.create(req.body);

    res.status(201).json({
      success: true,
      data: event
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update event
//@route    PUT /events/update/id
//@access   Admin
const updateEvent = async (req, res, next) => {
  try {
    const event = await model.Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!event) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: event
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Delete event
//@route    DELETE /events/delete/id
//@access   Admin
const deleteEvent = async (req, res, next) => {
  try {
    const event = await model.Event.findByIdAndDelete(req.params.id);

    if (!event) {
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
  getAllEvents,
  getOneEvent,
  createEvents,
  updateEvent,
  deleteEvent
};
