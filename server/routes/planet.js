var mongoose = require('mongoose');
var path = require('path');
var planetCrontroller = require('../controllers/planet.js');
module.exports = (function(app){
  // planets CRUD
  app.get('/planets', (req, res, next)=>{
    planetCrontroller.index(req, res);
  });
  app.post('/planets', (req, res, next)=>{
    planetCrontroller.create(req, res);
  });
  app.get('/planets/:id', (req, res, next)=>{
    planetCrontroller.show(req, res);
  });
  app.delete('/planets/:id', (req, res, next)=>{
    planetCrontroller.destroy(req, res);
  });
  app.put('/planets/:id', (req, res, next)=>{
    planetCrontroller.update(req, res);
  });
});
