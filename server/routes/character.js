var mongoose = require('mongoose');
var path = require('path');
var characterCrontroller = require('../controllers/character.js');
module.exports = (function(app){
  // characters CRUD
  app.get('/characters', (req, res, next)=>{
    characterCrontroller.index(req, res);
  });
  app.post('/characters', (req, res, next)=>{
    characterCrontroller.create(req, res);
  });
  app.get('/characters/:id', (req, res, next)=>{
    characterCrontroller.show(req, res);
  });
  app.delete('/characters/:id', (req, res, next)=>{
    characterCrontroller.destroy(req, res);
  });
  app.put('/characters/:id', (req, res, next)=>{
    characterCrontroller.update(req, res);
  });
});
