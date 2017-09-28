var mongoose = require('mongoose')
var Planet = mongoose.model('planet')

module.exports = {
  index: function(req, res){
    Planet.find({})
    .populate('languages')
    .exec(function(err, data) {
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Planet.findOne({_id:req.params.id})
    .populate('languages')
    .exec(function(err, data) {
        if (err) {
          res.json (err);
          return;
        }
        res.json(planet);
    });
  },
  create: function(req, res){
    var planet = new Planet(req.body);
    planet.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Planet.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Planet.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
