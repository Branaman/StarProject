var mongoose = require('mongoose');
var path = require('path');
var itemCrontroller = require('../controllers/item.js');
module.exports = (function(app){
  // items CRUD
  app.get('/items', (req, res, next)=>{
    itemCrontroller.index(req, res);
  });
  app.post('/items', (req, res, next)=>{
    itemCrontroller.create(req, res);
  });
  app.get('/items/:id', (req, res, next)=>{
    itemCrontroller.show(req, res);
  });
  app.delete('/items/:id', (req, res, next)=>{
    itemCrontroller.destroy(req, res);
  });
  app.put('/items/:id', (req, res, next)=>{
    itemCrontroller.update(req, res);
  });
});
