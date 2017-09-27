var mongoose = require('mongoose')
var Equipment = mongoose.model('equipment')

module.exports = {
  index: function(req, res){
    Equipment.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
      Equipment.findOne({_id:req.params.id}, function(err, equipment){
          if (err) {
            res.json (err);
            return;
          }
          res.json(equipment);
      });
  },
  create: function(req, res){
    var equipment = new Equipment(req.body);
    equipment.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Equipment.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Equipment.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
