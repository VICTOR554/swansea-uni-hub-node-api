const model = require('../../../models/model');

//@des      get all books
//@route    GET /books
//@access   Admin 
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
//@access   Admin
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

//@des      Create books
//@route    POST /books/new
//@access   Admin
const createBooks = async (req, res, next) => {
  try {
    const book = await model.Book.create(req.body);

    res.status(201).json({
      success: true,
      data: book
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@des      Update book
//@route    PUT /books/update/id
//@access   Admin
const updateBook = async (req, res, next) => {
  try {
    const book = await model.Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

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

//@des      Delete book
//@route    DELETE /books/delete/id
//@access   Admin
const deleteBook = async (req, res, next) => {
  try {
    const Book = await model.Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  createBooks,
  updateBook,
  deleteBook
};
