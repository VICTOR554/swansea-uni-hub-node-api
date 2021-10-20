const model = require('../../../models/model');

//@des      get one student
//@route    GET /students/:id
//@access   Student
const getOneStudent = async (req, res, next) => {
  try {
    const student = await model.Student.findById(req.params.id);

    if (!student) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update student
//@route    PUT /students/update/id
//@access   Student
const updateStudent = async (req, res, next) => {
  try {
    const student = await model.Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!student) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};


module.exports = {
  getOneStudent,
  updateStudent,
};
