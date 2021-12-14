const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all notes
//@route    GET /notes
//@access   Student
const getAllNotes = asyncHandler(async (req, res, next) => {
  const note = await model.Note.find({studentNumber: req.user.number}).sort( { createdDateTime: -1 } );



  res.status(200).json({
    success: true,
    data: note
  });
});


//@des      get one note
//@route    GET /notes/:id
//@access   Student
const getOneNote = asyncHandler(async (req, res, next) => {
  const note = await model.Note.find({studentNumber: req.user.number,  _id: req.params.id});



  res.status(200).json({
    success: true,
    data: note
  });
});

//@des      Create notes
//@route    POST /notes/new
//@access   Student
const createNotes = asyncHandler(async (req, res, next) => {
  student = {studentNumber: req.user.number}


  const note = await model.Note.create({...req.body, ...student})

  res.status(201).json({
    success: true,
    data: note
  });
});

//@des      Update note
//@route    PUT /notes/update/id
//@access   Student
const updateNote = asyncHandler(async (req, res, next) => {
  const note = await model.Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!note) {
    return next(new ErrorResponse(`Note is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: note
  });
});

//@des      Delete note
//@route    DELETE /notes/delete/id
//@access   Student
const deleteNote = asyncHandler(async (req, res, next) => {
  const note = await model.Note.findByIdAndDelete(req.params.id);

  if (!note) {
    return next(new ErrorResponse(`Note is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllNotes,
  getOneNote,
  createNotes,
  updateNote,
  deleteNote
};
