var mongoose = require('mongoose')
var Proficiency = mongoose.model('proficiency')

module.exports = {
  index: function(req, res){
    Proficiency.find({})
    .populate('armorType')
    .populate('weaponType')
    .exec(function(err, data) {
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Proficiency.findOne({_id:req.params.id})
    .populate('armorType')
    .populate('weaponType')
    .exec(function(err, data){
        if (err) {
          res.json (err);
          return;
        }
        res.json(data);
    });
  },
  create: function(req, res){
    var proficiency = new Proficiency(req.body);
    proficiency.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Proficiency.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Proficiency.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
