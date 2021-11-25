const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all books
//@route    GET /books
//@access   Student 
const getAllBooks = asyncHandler(async (req, res, next) => {
  const book = await model.Book.find();

  res.status(200).json({
    success: true,
    count: book.length,
    data: book
  });
});

//@des      get one book
//@route    GET /books/:id
//@access   Student
const getOneBook = asyncHandler(async (req, res, next) => {
  const book = await model.Book.findById(req.params.id);

  if (!book) {
    return next(new ErrorResponse(`Student is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: book
  });
});



module.exports = {
  getAllBooks,
  getOneBook
};
