var mongoose = require('mongoose');
var path = require('path');
var raceCrontroller = require('../controllers/race.js');
module.exports = (function(app){
  // races CRUD
  app.get('/races', (req, res, next)=>{
    raceCrontroller.index(req, res);
  });
  app.post('/races', (req, res, next)=>{
    raceCrontroller.create(req, res);
  });
  app.get('/races/:id', (req, res, next)=>{
    raceCrontroller.show(req, res);
  });
  app.delete('/races/:id', (req, res, next)=>{
    raceCrontroller.destroy(req, res);
  });
  app.put('/races/:id', (req, res, next)=>{
    raceCrontroller.update(req, res);
  });
});
