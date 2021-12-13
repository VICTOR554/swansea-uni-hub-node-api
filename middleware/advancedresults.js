const ErrorResponse = require('../utils/errorResponse');

const advancedResults = (model, populate,) => async (req, res, next) => {
    let query;

    // copy req.query
    const reqQuery = { ...req.query };
  
    //Field to exclude
    const removeFields = ['select', 'sort'];
  
    //loop removeFields and exclude them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);
  
    //Create query string
    let queryStr = JSON.stringify(req.query);
  
    //Create operators
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  
    // finding model resource
    query = model.find(JSON.parse(queryStr));


    //Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }
   
    //Sort Fields
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    }

     //Sort Fields
     if (req.query.find) {
      const find = req.query.find.split(',').join(' ');
      query = query.find;
    }
  
    if (populate) {
      query = query.populate(populate);
    }
   
    //Executing query
    const results = await query;

    if (results.length == 0) {
      return next(new ErrorResponse(`There is no object in the database.`, 404));
    }
    res.advancedResults = {
        success: true,
        count: results.length,
        data: results
    }

    next();
};

module.exports = advancedResults;