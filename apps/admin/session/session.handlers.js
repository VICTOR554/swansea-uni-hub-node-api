const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const moment = require("moment");
const model = require('../../../models/model');


//@des      get all sessions
//@route    GET /sessions
//@access   Admin
const getAllSessions = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@des      get one session
//@route    GET /sessions/:id
//@access   Admin
const getOneSession = asyncHandler(async (req, res, next) => {
  const session = await model.Session.findById(req.params.id);

  if (!session) {
    return next(new ErrorResponse(`Session is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: session
  });
});

//@des      Create sessions
//@route    POST /sessions/new
//@access   Admin
const createSessions = asyncHandler(async (req, res, next) => {
  const session = await model.Session.create(req.body);
  getWeeks(req, res);

  res.status(201).json({
    success: true,
    data: session
  });

});

//@des      Update session
//@route    PUT /sessions/update/id
//@access   Admin
const updateSession = asyncHandler(async (req, res, next) => {
  const session = await model.Session.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!session) {
    return next(new ErrorResponse(`Session is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: session
  });
});

//@des      Delete session
//@route    DELETE /sessions/delete/id
//@access   Admin
const deleteSession = asyncHandler(async (req, res, next) => {
  const session = await model.Session.findByIdAndDelete(req.params.id);

  if (!session) {
    return next(new ErrorResponse(`Session is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});


const getWeeks =  function(req, res){
  start_date = moment.unix(req.body.start_date).format('X');
  console.log(start_date)
  nweeks = req.body.number_of_weeks;

  for (i = 1; i <= nweeks; i++) {
    week = {};
    dates = [];
    week.number = i;

    for (j = 1; j <= 7; j++) {
      dates.push(start_date);
      start_date = moment.unix(start_date).add(1, "days").format('X');
      console.log(start_date)
    }
    week.dates = dates;
    
    model.Week.updateOne({number: week.number},week,{upsert: true})
    .catch(e => {
      console.log("error with the weeks:", err);
      res.status(402).send(err)
    });
  }
}

module.exports = {
  getAllSessions,
  getOneSession,
  createSessions,
  updateSession,
  deleteSession
};
