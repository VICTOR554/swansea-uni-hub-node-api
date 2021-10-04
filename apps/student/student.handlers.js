//@des      get one student
//@route    GET /:id
//@access   Admin
const getStudent = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get student ${req.params.id}`});
  };

//@des      Update student
//@route    PUT /update/id
//@access   Admin
const updateStudent = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update student ${req.params.id}`});
  };

  module.exports = {
    getStudent,
    updateStudent,
   
  }