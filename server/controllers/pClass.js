var mongoose = require('mongoose')
var PClass = mongoose.model('pClass')

module.exports = {
  index: function(req, res){
    PClass.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
      PClass.findOne({_id:req.params.id}, function(err, pClass){
          if (err) {
            res.json (err);
            return;
          }
          res.json(pClass);
      });
  },
  create: function(req, res){
    var pClass = new PClass(req.body);
    pClass.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    PClass.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    PClass.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
