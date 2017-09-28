var mongoose = require('mongoose');
var path = require('path');
var spellSchoolCrontroller = require('../controllers/spellSchool.js');
module.exports = (function(app){
  // spellSchools CRUD
  app.get('/spellSchools', (req, res, next)=>{
    spellSchoolCrontroller.index(req, res);
  });
  app.post('/spellSchools', (req, res, next)=>{
    spellSchoolCrontroller.create(req, res);
  });
  app.get('/spellSchools/:id', (req, res, next)=>{
    spellSchoolCrontroller.show(req, res);
  });
  app.delete('/spellSchools/:id', (req, res, next)=>{
    spellSchoolCrontroller.destroy(req, res);
  });
  app.put('/spellSchools/:id', (req, res, next)=>{
    spellSchoolCrontroller.update(req, res);
  });
});
