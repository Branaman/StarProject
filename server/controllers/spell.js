var mongoose = require('mongoose')
var Spell = mongoose.model('spell')
var SpellSchool = mongoose.model('spellSchool')

module.exports = {
  index: function(req, res){
    Spell.find({})
    .populate('spellSchool')
    .exec(function(err, data) {
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Spell.findOne({_id:req.params.id})
    .populate('spellSchool')
    .exec(function(err, data) {
        if (err) {
          res.json (err);
          return;
        }
        res.json(spell);
    });
  },
  create: function(req, res){
    var spell = new Spell(req.body);
    spell.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Spell.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Spell.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  // initialize
  initialize: function(){
    var spellStock = [
      {
        title:"Synaptic Pulse",
        description:"You stun all creatures in range for 1 round",
        spellSchool:"Enchantment",
        castingTime:1,
        range:20,
        target:"20 ft. radius spread centered on you",
        duration:1,
        spellSave:"Will Negates",
        spellResist:true,
      },
      {
        title:"Plane Shift",
        description:"You move yourself or some other creature to another plane of existence or alternate dimension. If several willing or unconscious creatures are linked by hand in a circle, as many as eight can be affected by a single casting of plane shift. Arriving at a precise location on the intended plane is nigh impossible. From the Material Plane, you can reach any other plane (except for the Drift), though you appear 5 to 500 miles (5d%) from the last place one of the targets (your choice) was located last time that target traveled to that plane. If it’s the first time traveling to a particular plane for all targets, you appear at a random location on the plane, though you can use other means of transit, such as interplanetary teleport, to travel on the new plane. Mystics must have an object attuned to a specific plane or native to that plane in order to use plane shift to travel to a plane. A technomancer requires a planar navigational program for a specific plane in order to travel to that plane with plane shift. Special rituals, jealously hoarded by powerful technomancers and mystics, can allow you to travel to specific locations on the chosen plane, or even to unknown worlds.",
        spellSchool:"Conjuration",
        castingTime:1,
        range:0,
        target:" one creature, or up to eight willing or unconscious creatures",
        duration:0,
        spellSave:"Will Negates",
        spellResist:true,
      },
    ];
    for (var i = 0; i < spellStock.length; i++) {
      var spell = new Spell(spellStock[i]);
      SpellSchool.findOne({title: spellStock[i].spellSchool}, function(err, spellSchool){
        if (err) {
          return;
        }
        spell.spellSchool = spellSchool._id;
      });
      spell.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
