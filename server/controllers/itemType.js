var mongoose = require('mongoose')
var ItemType = mongoose.model('itemType')

module.exports = {
  index: function(req, res){
    ItemType.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    ItemType.findOne({_id:req.params.id}, function(err, itemType){
        if (err) {
          res.json (err);
          return;
        }
        res.json(itemType);
    });
  },
  create: function(req, res){
    var itemType = new ItemType(req.body);
    itemType.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    ItemType.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    ItemType.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
