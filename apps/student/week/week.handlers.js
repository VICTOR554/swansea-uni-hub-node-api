const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');
const moment = require('moment')


//@des      get all weeks
//@route    GET /weeks
//@access   Student
const getAllWeeks = asyncHandler(async (req, res, next) => {
  const week = await model.Week.find();

  res.status(200).json({
    success: true,
    count: week.length,
    data: week
  });
});

//@des      get one week
//@route    GET /weeks/:id
//@access   Student
const getOneWeek = asyncHandler(async (req, res, next) => {
  const week = await model.Week.findById(req.params.id);

  if (!week) {
    return next(new ErrorResponse(`Week is not in the database with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: week
  });
});

const getOneWeekByNumber = asyncHandler(async (req, res, next) => {

  const week = await model.Week.findOne({ number: req.params.number });

  if (!week) {
    return next(new ErrorResponse(`Week is not in the database with the number of ${req.params.number}`, 404));
  }

  res.status(200).json({
    success: true,
    data: week
  });
});

const getOneWeekByDate = asyncHandler(async (req, res) => {
  date = req.params.date
  console.log('date', date)
  
  let start_date = moment.unix(date).startOf('day').format('X')
  console.log(start_date)

  let end_date = moment.unix(date).endOf('day').format('X')
  console.log(end_date)

  let found = false
  let foundWeek
  const week = await model.Week.find()
  .then(d => {
      for(i=0;i<d.length;i++){
          dates = d[i].dates
          
          if(found == false){
              for(j=0; j<dates.length;j++){
                  console.log(dates[j])
                  if(dates[j]>start_date && dates[j]<end_date){
                      found = true
                      foundWeek = d[i]
                      console.log(foundWeek)
                      res.send(d[i])
                  }                    
              }
          }else{
              i = d.length
          }
      }
      if (found==false) {
        return next(new ErrorResponse(`Could not find week with the date of ${req.params.date}`, 404));
      }
  })

  res.status(200).json({
    success: true,
    data: week
  });
});

module.exports = {
  getAllWeeks,
  getOneWeek,
  getOneWeekByNumber,
  getOneWeekByDate
};
