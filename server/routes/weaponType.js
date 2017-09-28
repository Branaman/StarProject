var mongoose = require('mongoose');
var path = require('path');
var weaponTypeCrontroller = require('../controllers/weaponType.js');
module.exports = (function(app){
  // weaponTypes CRUD
  app.get('/weaponTypes', (req, res, next)=>{
    weaponTypeCrontroller.index(req, res);
  });
  app.post('/weaponTypes', (req, res, next)=>{
    weaponTypeCrontroller.create(req, res);
  });
  app.get('/weaponTypes/:id', (req, res, next)=>{
    weaponTypeCrontroller.show(req, res);
  });
  app.delete('/weaponTypes/:id', (req, res, next)=>{
    weaponTypeCrontroller.destroy(req, res);
  });
  app.put('/weaponTypes/:id', (req, res, next)=>{
    weaponTypeCrontroller.update(req, res);
  });
});
