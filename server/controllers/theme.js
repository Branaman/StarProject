var mongoose = require('mongoose')
var Spell = mongoose.model('spell')

module.exports = {
  index: function(req, res){
    Spell.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Spell.findOne({_id:req.params.id}, function(err, spell){
        if (err) {
          res.json (err);
          return;
        }
        res.json(spell);
    });
  },
  create: function(req, res){
    var spell = new Spell(req.body);
    spell.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Spell.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Spell.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
