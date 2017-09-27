var mongoose = require('mongoose');
var path = require('path');
var itemTypeCrontroller = require('../controllers/itemType.js');
module.exports = (function(app){
  // itemTypes CRUD
  app.get('/itemTypes', (req, res, next)=>{
    itemTypeCrontroller.index(req, res);
  });
  app.post('/itemTypes', (req, res, next)=>{
    itemTypeCrontroller.create(req, res);
  });
  app.get('/itemTypes/:id', (req, res, next)=>{
    itemTypeCrontroller.show(req, res);
  });
  app.delete('/itemTypes/:id', (req, res, next)=>{
    itemTypeCrontroller.destroy(req, res);
  });
  app.put('/itemTypes/:id', (req, res, next)=>{
    itemTypeCrontroller.update(req, res);
  });
});
