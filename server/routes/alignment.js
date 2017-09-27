var mongoose = require('mongoose');
var path = require('path');
var alignmentCrontroller = require('../controllers/alignment.js');
module.exports = (function(app){
  // alignments CRUD
  app.get('/alignments', (req, res, next)=>{
    alignmentCrontroller.index(req, res);
  });
  app.post('/alignments', (req, res, next)=>{
    alignmentCrontroller.create(req, res);
  });
  app.get('/alignments/:id', (req, res, next)=>{
    alignmentCrontroller.show(req, res);
  });
  app.delete('/alignments/:id', (req, res, next)=>{
    alignmentCrontroller.destroy(req, res);
  });
  app.put('/alignments/:id', (req, res, next)=>{
    alignmentCrontroller.update(req, res);
  });
});
