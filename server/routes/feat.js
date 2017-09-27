var mongoose = require('mongoose');
var path = require('path');
var featCrontroller = require('../controllers/feat.js');
module.exports = (function(app){
  // feats CRUD
  app.get('/feats', (req, res, next)=>{
    featCrontroller.index(req, res);
  });
  app.post('/feats', (req, res, next)=>{
    featCrontroller.create(req, res);
  });
  app.get('/feats/:id', (req, res, next)=>{
    featCrontroller.show(req, res);
  });
  app.delete('/feats/:id', (req, res, next)=>{
    featCrontroller.destroy(req, res);
  });
  app.put('/feats/:id', (req, res, next)=>{
    featCrontroller.update(req, res);
  });
});
