var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');
var characterCrontroller = require('../controllers/character.js');
var userCrontroller = require('../controllers/user.js');
module.exports = (function(app){
  app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
  });
  // characters
  app.get('/characters', (req, res, next)=>{
    characterCrontroller.index(req, res);
  });
  app.post('/characters', (req, res, next)=>{
    characterCrontroller.create(req, res);
  });
  app.get('/characters/:id', (req, res, next)=>{
    characterCrontroller.show(req, res);
  });
  app.delete('/characters/:id', (req, res, next)=>{
    characterCrontroller.destroy(req, res);
  });
  app.put('/characters/:id', (req, res, next)=>{
    characterCrontroller.update(req, res);
  });
  // users
  app.post('/users', (req, res, next)=>{
    userCrontroller.create(req, res);
  });
  // login
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
  app.get('/users', (req, res, next)=>{
    userCrontroller.index(req, res);
  });
  app.get('/users/:id', (req, res, next)=>{
    userCrontroller.show(req, res);
  });
  app.delete('/users/:id', (req, res, next)=>{
    userCrontroller.destroy(req, res);
  });
  app.put('/users/:id', (req, res, next)=>{
    userCrontroller.update(req, res);
  });
  app.all("*", (req, res, next) => {
    if (!req.user) {
      res.redirect('/');
    }
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
});
