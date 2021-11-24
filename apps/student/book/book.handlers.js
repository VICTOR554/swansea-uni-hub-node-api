const model = require('../../../models/model');

//@des      get all books
//@route    GET /books
//@access   Student 
const getAllBooks = async (req, res, next) => {
  try {
    const book = await model.Book.find();

    res.status(200).json({
      success: true,
      count: book.length,
      data: book
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      get one book
//@route    GET /books/:id
//@access   Student
const getOneBook= async (req, res, next) => {
  try {
    const book = await model.Book.findById(req.params.id);

    if (!book) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: book
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};



module.exports = {
  getAllBooks,
  getOneBook
};
