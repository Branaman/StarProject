var mongoose = require('mongoose');
var path = require('path');
var proficiencyCrontroller = require('../controllers/proficiency.js');
module.exports = (function(app){
  // proficiencies CRUD
  app.get('/proficiencies', (req, res, next)=>{
    proficiencyCrontroller.index(req, res);
  });
  app.post('/proficiencies', (req, res, next)=>{
    proficiencyCrontroller.create(req, res);
  });
  app.get('/proficiencies/:id', (req, res, next)=>{
    proficiencyCrontroller.show(req, res);
  });
  app.delete('/proficiencies/:id', (req, res, next)=>{
    proficiencyCrontroller.destroy(req, res);
  });
  app.put('/proficiencies/:id', (req, res, next)=>{
    proficiencyCrontroller.update(req, res);
  });
});
