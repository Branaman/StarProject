var mongoose = require('mongoose')
var SpellSchool = mongoose.model('spellSchool')

module.exports = {
  index: function(req, res){
    SpellSchool.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    SpellSchool.findOne({_id:req.params.id}, function(err, spellSchool){
        if (err) {
          res.json (err);
          return;
        }
        res.json(spellSchool);
    });
  },
  create: function(req, res){
    var spellSchool = new SpellSchool(req.body);
    spellSchool.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    SpellSchool.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    SpellSchool.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
