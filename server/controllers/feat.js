var mongoose = require('mongoose')
var Feat = mongoose.model('feat')

module.exports = {
  index: function(req, res){
    Feat.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
      Feat.findOne({_id:req.params.id}, function(err, feat){
          if (err) {
            res.json (err);
            return;
          }
          res.json(feat);
      });
  },
  create: function(req, res){
    var feat = new Feat(req.body);
    feat.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Feat.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Feat.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
