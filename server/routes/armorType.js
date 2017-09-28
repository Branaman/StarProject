var mongoose = require('mongoose');
var path = require('path');
var armorTypeCrontroller = require('../controllers/armorType.js');
module.exports = (function(app){
  // armorTypes CRUD
  app.get('/armorTypes', (req, res, next)=>{
    armorTypeCrontroller.index(req, res);
  });
  app.post('/armorTypes', (req, res, next)=>{
    armorTypeCrontroller.create(req, res);
  });
  app.get('/armorTypes/:id', (req, res, next)=>{
    armorTypeCrontroller.show(req, res);
  });
  app.delete('/armorTypes/:id', (req, res, next)=>{
    armorTypeCrontroller.destroy(req, res);
  });
  app.put('/armorTypes/:id', (req, res, next)=>{
    armorTypeCrontroller.update(req, res);
  });
});
