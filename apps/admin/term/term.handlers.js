
//@des      get all terms
//@route    GET /terms
//@access   Admin
const getAllTerms = (req, res, next) => { 
    res.status(200).json({ success: true, msg: `Show all terms`});
  };

//@des      get one term
//@route    GET /terms/:id
//@access   Admin
const getOneTerm = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get term ${req.params.id}`});
  };

//@des      Create terms
//@route    POST /terms/new
//@access   Admin
const createTerms = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new terms`});
  };

//@des      Update term
//@route    PUT /terms/update/id
//@access   Admin
const updateTerm = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update term ${req.params.id}`});
  };

//@des      Delete term
//@route    DELETE /terms/delete/id
//@access   Admin
const deleteTerm = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete term ${req.params.id}`});
};


module.exports = {
  getAllTerms,
  getOneTerm,
  createTerms,
  updateTerm,
  deleteTerm
 
}