var mongoose = require('mongoose')
var Item = mongoose.model('item')

module.exports = {
  index: function(req, res){
    Item.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Item.findOne({_id:req.params.id}, function(err, item){
        if (err) {
          res.json (err);
          return;
        }
        res.json(item);
    });
  },
  create: function(req, res){
    var item = new Item(req.body);
    item.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Item.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Item.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
