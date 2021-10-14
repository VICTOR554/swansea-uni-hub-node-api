const model = require('../../../models/model');

//@des      get all notes
//@route    GET /notes
//@access   Student
const getAllNotes = async (req, res, next) => { 
  try {
    const note = await model.Note.find();

    res.status(200).json({
      success: true,
      count: note.length,
      data: note
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      get one note
//@route    GET /notes/:id
//@access   Student
const getOneNote = async (req, res, next) => {
  try {
    const note = await model.Note.findById(req.params.id);

    if (!note) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: note
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Create note
//@route    POST /notes/new
//@access   Student
const createNotes = async (req, res, next) => {
  try {
    const note = await model.Note.create(req.body);

    res.status(201).json({
      success: true,
      data: note
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Update note
//@route    PUT /notes/update/id
//@access   Student
const updateNote = async (req, res, next) => {
  try {
    const note = await model.Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!note) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: note
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      Delete note
//@route    DELETE /notes/delete/id
//@access   Student
const deleteNote = async (req, res, next) => {
  try {
    const note = await model.Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }};


module.exports = {
  getAllNotes,
  getOneNote,
  createNotes,
  updateNote,
  deleteNote
 
}