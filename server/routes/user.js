var mongoose = require('mongoose');
var path = require('path');
var userCrontroller = require('../controllers/user.js');
module.exports = (function(app){
  // users
  app.post('/users', (req, res, next)=>{
    userCrontroller.create(req, res);
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
});
