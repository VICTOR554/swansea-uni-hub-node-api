const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');

//@des      get all notifications
//@route    GET /notifications
//@access   Admin
const getAllNotification = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one notification
//@route    GET /notifications/:id
//@access   Admin
const getOneNotification = asyncHandler(async (req, res, next) => {
  const notification = await model.Notification.findById(req.params.id);

  if (!notification) {
    return next(new ErrorResponse(`Notification is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: notification
  });
});

//@des      Create notifications
//@route    POST /notifications/new
//@access   Admin
const createNotification = asyncHandler(async (req, res, next) => {
  const notification = await model.Notification.create(req.body);

  res.status(201).json({
    success: true,
    data: notification
  });
});

//@des      Update notification
//@route    PUT /notifications/update/id
//@access   Admin
const updateNotification = asyncHandler(async (req, res, next) => {
  const notification = await model.Notification.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!notification) {
    return next(new ErrorResponse(`Notification is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: notification
  });
});

//@des      Delete notification
//@route    DELETE /notifications/delete/id
//@access   Admin
const deleteNotification = asyncHandler(async (req, res, next) => {
  const notification = await model.Notification.findByIdAndDelete(req.params.id);

  if (!notification) {
    return next(new ErrorResponse(`Notification is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getAllNotification,
  getOneNotification,
  createNotification,
  updateNotification,
  deleteNotification
};
