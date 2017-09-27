var mongoose = require('mongoose');
var path = require('path');
var equipmentCrontroller = require('../controllers/equipment.js');
module.exports = (function(app){
  // equipments CRUD
  app.get('/equipments', (req, res, next)=>{
    equipmentCrontroller.index(req, res);
  });
  app.post('/equipments', (req, res, next)=>{
    equipmentCrontroller.create(req, res);
  });
  app.get('/equipments/:id', (req, res, next)=>{
    equipmentCrontroller.show(req, res);
  });
  app.delete('/equipments/:id', (req, res, next)=>{
    equipmentCrontroller.destroy(req, res);
  });
  app.put('/equipments/:id', (req, res, next)=>{
    equipmentCrontroller.update(req, res);
  });
});
