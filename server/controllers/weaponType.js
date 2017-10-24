var mongoose = require('mongoose')
var WeaponType = mongoose.model('weaponType')

module.exports = {
  index: function(req, res){
    WeaponType.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    WeaponType.findOne({_id:req.params.id}, function(err, data){
        if (err) {
          res.json (err);
          return;
        }
        res.json(data);
    });
  },
  create: function(req, res){
    var weaponType = new WeaponType(req.body);
    weaponType.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    WeaponType.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    WeaponType.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  // initialize
  initialize: function(){
    var weaponTypeStock = [
      {
        key: 1,
        title:"Basic Melee Weapon",
        description:"Any handheld weapon that must touch a target to deal damage is considered a melee weapon. Basic melee weapons can be easily used by almost anyone and generally require no special training. While basic melee weapons deal less damage than more sophisticated weapons of the same item level, they have the advantage of not usually requiring power sources and operating under almost any conditions. Basic melee weapons are divided into one-handed and two-handed weapons, as shown on Table 7–1.",
      },
      {
        key: 2,
        title:"Small Arms",
        description:"Small arms are handheld ranged weapons that can be held and operated with one hand. Various pistols are the most common type, though many types of small arms exist. Small arms require a battery or ammunition of the proper size and type to function, as shown on Table 7–3.",
      },
      {
        key: 3,
        title:"Advanced Melee Weapon",
        description:"Any handheld weapon that must touch a target to damage it is considered a melee weapon. Advanced melee weapons require a degree of training and skill to use properly. Advanced melee weapons are divided into one-handed and two-handed weapons, as shown on Table 7–2.",
      },
    ];
    for (var i = 0; i < weaponTypeStock.length; i++) {
      var weaponType = new WeaponType(weaponTypeStock[i]);
      weaponType.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
