var mongoose = require('mongoose');
var path = require('path');
module.exports = (function(app){
  app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
  });
});
