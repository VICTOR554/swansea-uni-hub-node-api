const advancedResults = (model) => async (req, res, next) => {
    let query;

    // copy req.query
    const reqQuery = { ...req.query };
  
    //Field to exclude
    const removeFields = ['sort'];
  
    //loop removeFields and exclude them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);
  
    //Create query string
    let queryStr = JSON.stringify(req.query);
  
    //Create operators
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  
    // finding model resource
    query = model.find(JSON.parse(queryStr));
  
    //Sort Fields
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    }
  
    //Executing query
    const results = await query;

    res.advancedResults = {
        success: true,
        count: results.length,
        data: results
    }

    next();
};

module.exports = advancedResults;