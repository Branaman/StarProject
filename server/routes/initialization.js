var mongoose = require('mongoose');
var path = require('path');
var initializeCrontroller = require('../controllers/initialize.js');

module.exports = (function(app){
  // create stock themes
  app.get('/initialize', (req, res, next)=>{
    initializeCrontroller.initialize();
    res.json('initialize finished');
  });
});
