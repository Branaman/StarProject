var mongoose = require('mongoose');
var path = require('path');
var languageCrontroller = require('../controllers/language.js');
module.exports = (function(app){
  // languages CRUD
  app.get('/languages', (req, res, next)=>{
    languageCrontroller.index(req, res);
  });
  app.post('/languages', (req, res, next)=>{
    languageCrontroller.create(req, res);
  });
  app.get('/languages/:id', (req, res, next)=>{
    languageCrontroller.show(req, res);
  });
  app.delete('/languages/:id', (req, res, next)=>{
    languageCrontroller.destroy(req, res);
  });
  app.put('/languages/:id', (req, res, next)=>{
    languageCrontroller.update(req, res);
  });
});
