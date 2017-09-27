var mongoose = require('mongoose');
var path = require('path');
var themeCrontroller = require('../controllers/theme.js');
module.exports = (function(app){
  // themes CRUD
  app.get('/themes', (req, res, next)=>{
    themeCrontroller.index(req, res);
  });
  app.post('/themes', (req, res, next)=>{
    themeCrontroller.create(req, res);
  });
  app.get('/themes/:id', (req, res, next)=>{
    themeCrontroller.show(req, res);
  });
  app.delete('/themes/:id', (req, res, next)=>{
    themeCrontroller.destroy(req, res);
  });
  app.put('/themes/:id', (req, res, next)=>{
    themeCrontroller.update(req, res);
  });
});
