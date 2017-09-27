var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');
module.exports = (function(app){
  app.post('/login', (req,res,next)=>{
    passport.authenticate('local', function(err, user, info) {
      if (err) { return res.json(err); }
      if (!user) { return res.json(info); }
      req.logIn (user, function(err){
        if (err) {
          return res.json(err);
        }return res.json(true);
      });
    })(req, res, next);
  });
  app.get('/logout', (req,res,next)=>{
    req.logout();
    res.redirect('/');
  });
  app.get('/checkLogIn', (req, res, next)=>{
    if (req.user) {
      res.json(true);
    }
  });
});
