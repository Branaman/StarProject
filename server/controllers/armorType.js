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
  // initialize
  initialize: function(){
    var armorTypeStock = [
      {
        key: 1,
        title:"Light Armor",
        description:"Light armor requires 4 rounds to don or remove.",
      },
      {
        key: 2,
        title:"Heavy Armor",
        description:"Heavy armor requires 16 rounds to don or remove.",
      },
      {
        key: 3,
        title:"Powered Armor",
        description:"Unlike light and heavy armor, powered armor requires its own battery, and comes with a fully charged battery at purchase. Powered armor uses the same type of batteries as other items, including charged weapons, and the battery for a suit of powered armor can be recharged as normal using a generator or recharging station (see page 234), or it can be replaced with a new battery when spent (see Table 7–9: Ammunition for battery pricing).",
      },
    ];
    for (var i = 0; i < armorTypeStock.length; i++) {
      var armorType = new ArmorType(armorTypeStock[i]);
      armorType.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
