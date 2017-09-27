var mongoose = require('mongoose');
var path = require('path');
module.exports = (function(app){
  app.all("*", (req, res, next) => {
    if (!req.user) {
      res.redirect('/');
    }
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
});
