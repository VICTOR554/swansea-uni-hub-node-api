const model = require('../../../models/model');

//@des      get all lecturer
//@route    GET /lecturers
//@access   Student
const getAllLecturers = async (req, res, next) => { 
  try {
    const lecturer = await model.Lecturer.find();

    res.status(200).json({
      success: true,
      count: lecturer.length,
      data: lecturer
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };

//@des      get one lecturer
//@route    GET /lecturers/:id
//@access   Student
const getOneLecturer = async (req, res, next) => {
  try {
    const lecturer = await model.Lecturer.findById(req.params.id);

    if (!lecturer) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: lecturer
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }  };



module.exports = {
  getAllLecturers,
  getOneLecturer,
 
}