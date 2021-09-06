
//@des      get all notes
//@route    GET /notes
//@access   Note
const getAllNotes = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all notes`});
  };

//@des      get one note
//@route    GET /notes/:id
//@access   Note
const getOneNote = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get note ${req.params.id}`});
  };

//@des      Create note
//@route    POST /notes/new
//@access   Note
const createNotes = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new notes`});
  };

//@des      Update note
//@route    PUT /notes/update/id
//@access   Note
const updateNote = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update note ${req.params.id}`});
  };

//@des      Delete note
//@route    DELETE /notes/delete/id
//@access   Note
const deleteNote = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete note ${req.params.id}`});
};


module.exports = {
  getAllNotes,
  getOneNote,
  createNotes,
  updateNote,
  deleteNote
 
}