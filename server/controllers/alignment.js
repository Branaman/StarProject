var mongoose = require('mongoose')
var Alignment = mongoose.model('alignment')

module.exports = {
  index: function(req, res){
    Alignment.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Alignment.findOne({_id:req.params.id}, function(err, alignment){
        if (err) {
          res.json (err);
          return;
        }
        res.json(alignment);
    });
  },
  create: function(req, res){
    var alignment = new Alignment(req.body);
    alignment.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Alignment.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Alignment.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
