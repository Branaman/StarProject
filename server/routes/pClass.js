var mongoose = require('mongoose');
var path = require('path');
var pClassCrontroller = require('../controllers/pClass.js');
module.exports = (function(app){
  // pClasses CRUD
  app.get('/pClasses', (req, res, next)=>{
    pClassCrontroller.index(req, res);
  });
  app.post('/pClasses', (req, res, next)=>{
    pClassCrontroller.create(req, res);
  });
  app.get('/pClasses/:id', (req, res, next)=>{
    pClassCrontroller.show(req, res);
  });
  app.delete('/pClasses/:id', (req, res, next)=>{
    pClassCrontroller.destroy(req, res);
  });
  app.put('/pClasses/:id', (req, res, next)=>{
    pClassCrontroller.update(req, res);
  });
});
