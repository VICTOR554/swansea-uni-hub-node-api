const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all books
//@route    GET /books
//@access   Admin
const getAllBooks = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one book
//@route    GET /books/:id
//@access   Admin
const getOneBook = asyncHandler(async (req, res, next) => {
  const book = await model.Book.findById(req.params.id);

  if (!book) {
    return next(new ErrorResponse(`Book is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: book
  });
});

//@des      Create books
//@route    POST /books/new
//@access   Admin
const createBooks = asyncHandler(async (req, res, next) => {
  const book = await model.Book.create(req.body);

  res.status(201).json({
    success: true,
    data: book
  });
});

//@des      Update book
//@route    PUT /books/update/id
//@access   Admin
const updateBook = asyncHandler(async (req, res, next) => {
  const book = await model.Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!book) {
    return next(new ErrorResponse(`Book is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: book
  });
});

//@des      Delete book
//@route    DELETE /books/delete/id
//@access   Admin
const deleteBook = asyncHandler(async (req, res, next) => {
  const book = await model.Book.findByIdAndDelete(req.params.id);

  if (!book) {
    return next(new ErrorResponse(`Book is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllBooks,
  getOneBook,
  createBooks,
  updateBook,
  deleteBook
};
