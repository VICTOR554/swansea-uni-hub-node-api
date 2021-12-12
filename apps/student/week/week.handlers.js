const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const model = require('../../../models/model');
const moment = require('moment')


//@des      get all weeks
//@route    GET /weeks
//@access   Student
const getAllWeeks = function(req, res){
  model.Week.find().sort({number: 1})
.then(d => {
  res.send(d);
})
.catch(e => {
  console.log(e);
  res.send(e);
});

}

const getOneWeekByNumber = function(req, res){
  model.Week.findOne({ number: req.params.number })
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
}

const getOneWeekByDate = function(req, res){
  date = req.params.date
  console.log(date, 'loool')
  let startDate = moment.unix(date).startOf('day').format('X')
  console.log(startDate)

  let endDate = moment.unix(date).endOf('day').format('X')
  console.log(endDate)

  let found = false
  let foundWeek
  model.Week.find()
  .then(d => {
      for(i=0;i<d.length;i++){
          dates = d[i].dates
          
          if(found == false){
              for(j=0; j<dates.length;j++){
                  console.log(dates[j])
                  if(dates[j]>startDate && dates[j]<endDate){
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
      if(found==false){
      res.send(`couldn't find a week, check the date you input`)
      }
  })
  .catch(e => {
      console.log(e);
      res.send(e);
  });
}


module.exports = {
  getAllWeeks,
  // getOneWeek,
  getOneWeekByNumber,
  getOneWeekByDate
};
