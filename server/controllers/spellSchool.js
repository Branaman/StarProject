var mongoose = require('mongoose')
var SpellSchool = mongoose.model('spellSchool')

module.exports = {
  index: function(req, res){
    SpellSchool.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    SpellSchool.findOne({_id:req.params.id}, function(err, spellSchool){
        if (err) {
          res.json (err);
          return;
        }
        res.json(spellSchool);
    });
  },
  create: function(req, res){
    var spellSchool = new SpellSchool(req.body);
    spellSchool.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    SpellSchool.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    SpellSchool.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  // initialize
  initialize: function(){
    var spellSchoolStock = [
      {
        title:"Abjuration",
        description:"Abjurations are protective spells. If an abjuration creates a barrier that keeps certain types of creatures at bay, that barrier cannot be used to push away those creatures. If you force the barrier against such a creature, you feel a discernible pressure against the barrier. If you continue to apply pressure, the spell ends, even if the spell would normally work or its normal duration has not yet elapsed.",
      },
      {
        title:"Conjuration",
        description:"Conjuration spells bring creatures, objects, or energy (potentially including healing energy) into being or transport them to new locations. A conjured creature or object must arrive in an open location on a surface capable of supporting it. It can’t appear inside another creature or object. The conjured creature or object must appear within the spell’s range, but once conjured it does not have to remain within the range",
      },
      {
        title:"Divination",
        description:"Divination spells enable you to learn long-forgotten secrets, predict the future, find hidden things, and pierce deceptive spells. In most circumstances, attempts to use divination magic to glean information about events during the Gap fail.",
      },
      {
        title:"Enchantment",
        description:"Enchantment spells affect the minds of others, influencing or controlling their behavior. All enchantments are mind-affecting spells and have that descriptor. Most enchantments are either charms or compulsions and have those descriptors. See Descriptors on page 269 for more information.",
      },
      {
        title:"Evocation",
        description:"Evocation spells manipulate magical energy or tap an unseen source of power to produce a desired result created entirely with magic. Many of these spells produce spectacular effects, and evocation spells can deal large amounts of damage. Evocation spells often produce effects that manifest as various kinds of energy, or as an energy type of the caster’s choice, as noted in an individual spell’s description.",
      },
      {
        title:"Illusion",
        description:"Illusion spells deceive the senses or minds of others. They cause people to see things that aren’t there, not see things that are actually there, hear phantom noises, or remember things that never really happened. By default, illusions create actual sensory stimuli in much the same manner as a hologram might. Disbelieving Illusions: Creatures encountering an illusion usually don’t receive saving throws to recognize it as illusory until they study it carefully or interact with it in some fashion, which typically requires spending at least a move action focusing specifically on the illusion. A creature that succeeds at its saving throw to disbelieve can tell the illusion is false (but still sees a visual illusion as a translucent outline). A failed saving throw indicates that a character fails to notice something is amiss. A character faced with proof that an illusion isn’t real needs no saving throw to disbelieve it. If any observer successfully disbelieves an illusion and communicates this fact to others, each such observer can attempt a saving throw to disbelieve with a +4 bonus.",
      },
      {
        title:"Necromancy",
        description:"Necromancy spells manipulate the power of death, unlife, and life force, including spells involving creating undead creatures.",
      },
      {
        title:"Transmutation",
        description:"Transmutation spells change the properties of some creature, thing, or condition.",
      },
    ];
    for (var i = 0; i < spellSchoolStock.length; i++) {
      var spellSchool = new SpellSchool(spellSchoolStock[i]);
      spellSchool.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
