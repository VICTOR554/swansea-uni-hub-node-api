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


module.exports = {
  getAllNotification,
  getOneNotification
};
