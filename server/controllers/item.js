var mongoose = require('mongoose')
var Item = mongoose.model('item')
var WeaponType = mongoose.model('weaponType')
var ArmorType = mongoose.model('armorType')

module.exports = {
  index: function(req, res){
    Item.find({})
    .populate('armorType')
    .populate('weaponType')
    .exec(function(err, data) {
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Item.findOne({_id:req.params.id})
    .populate('armorType')
    .populate('weaponType')
    .exec(function(err, data) {
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
  // initialize
  initialize: function(){
    var itemStock = [
      {
            title:"Fangblade",
            level: 7,
            price: 5430,
            damage: "1d12 S",
            critical: "Bleed 1d8",
            description:"Cheaper and less elegant than a ripper dueling sword, a fangblade is closer to an industrial chainsaw, with a toothed, motor-driven chain wrapped around its blade",
            bulk:1,
            special: "Powered (capacity 20, usage 1)",
            weaponType:3,
      },
      {
            title:"Laser pistol, azimuth",
            level: 1,
            price: 350,
            damage: "1d4 F",
            critical: "Burn 1d4",
            description:"Laser weapons emit highly focused beams of light that deal fire damage. These beams can pass through glass and other transparent physical barriers, dealing damage to such barriers as they pass through. Barriers of energy or magical force block lasers. Invisible creatures don’t take damage from lasers, as the beams pass through them harmlessly. Fog, smoke, and other clouds provide both cover and concealment from laser attacks. Lasers can penetrate darkness, but they don’t provide any illumination. Laser weapons use various means to concentrate beams of light into deadly intensity. Some focus light through a faceted crystal, while others focus the beam through a chemical cloud or ionized gas.",
            bulk:0.1,
            weaponType:2,
      },
      {
            title:"Estex suit I",
            level: 1,
            price: 410,
            description:"Estex is a thick, durable fabric most often used to make flight suits and environmental suits. Estex suits cover the wearer from the neck down and can be modified with armor upgrades as needed. Higher-quality estex suits grant a better level of protection and allow for more upgrades, though they are often bulkier than comparable suits of light armor.",
            bulk:1,
            armorType:1,
            eAC:0,
            kAC:1,
            maxDex:5,
            armorPenalty:1,
            upgradeslots:2,
      },
    ];
    for (var i = 0; i < itemStock.length; i++) {
      var item = new Item(itemStock[i]);
      if (itemStock[i].weaponType) {
        WeaponType.findOne({id: itemStock[i].weaponType}, function(err, weaponType){
          if (err) {
            return;
          }
          item.weaponType = weaponType._id;
        });
      }
      if (itemStock[i].armorType) {
        ArmorType.findOne({id: itemStock[i].armorType}, function(err, armorType){
          if (err) {
            return;
          }
          item.armorType = armorType._id;
        });
      }
      item.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
