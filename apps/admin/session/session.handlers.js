
//@des      get all sessions
//@route    GET /sessions
//@access   Admin
const getAllSessions = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all sessions`});
  };

//@des      get one session
//@route    GET /sessions/:id
//@access   Admin
const getOneSession = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get session ${req.params.id}`});
  };

//@des      Create sessions
//@route    POST /sessions/new
//@access   Admin
const createSessions = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new sessions`});
  };

//@des      Update session
//@route    PUT /sessions/update/id
//@access   Admin
const updateSession = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update session ${req.params.id}`});
  };

//@des      Delete session
//@route    DELETE /sessions/delete/id
//@access   Admin
const deleteSession = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete session ${req.params.id}`});
};


module.exports = {
  getAllSessions,
  getOneSession,
  createSessions,
  updateSession,
  deleteSession
 
}