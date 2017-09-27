var mongoose = require('mongoose');
var path = require('path');
var spellCrontroller = require('../controllers/spell.js');
module.exports = (function(app){
  // spells CRUD
  app.get('/spells', (req, res, next)=>{
    spellCrontroller.index(req, res);
  });
  app.post('/spells', (req, res, next)=>{
    spellCrontroller.create(req, res);
  });
  app.get('/spells/:id', (req, res, next)=>{
    spellCrontroller.show(req, res);
  });
  app.delete('/spells/:id', (req, res, next)=>{
    spellCrontroller.destroy(req, res);
  });
  app.put('/spells/:id', (req, res, next)=>{
    spellCrontroller.update(req, res);
  });
});
