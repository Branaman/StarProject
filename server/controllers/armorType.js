var mongoose = require('mongoose')
var ArmorType = mongoose.model('armorType')

module.exports = {
  index: function(req, res){
    ArmorType.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    ArmorType.findOne({_id:req.params.id}, function(err, data){
        if (err) {
          res.json (err);
          return;
        }
        res.json(data);
    });
  },
  create: function(req, res){
    var armorType = new ArmorType(req.body);
    armorType.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    ArmorType.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    ArmorType.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
