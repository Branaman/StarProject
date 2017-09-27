var mongoose = require('mongoose')
var Race = mongoose.model('race')

module.exports = {
  index: function(req, res){
    Race.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Race.findOne({_id:req.params.id}, function(err, race){
        if (err) {
          res.json (err);
          return;
        }
        res.json(race);
    });
  },
  create: function(req, res){
    var race = new Race(req.body);
    race.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Race.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Race.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
