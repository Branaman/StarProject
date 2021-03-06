var mongoose = require('mongoose')
var Race = mongoose.model('race')
var Planet = mongoose.model('planet')
var Language = mongoose.model('language')

module.exports = {
  index: function(req, res){
    Race.find({})
    .populate('homeworld')
    .populate('languages')
    .exec(function(err, data) {
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Race.findOne({_id:req.params.id})
    .populate('homeworld')
    .populate('languages')
    .exec(function(err, data) {
        if (err) {
          res.json (err);
          return;
        }
        res.json(race);
    });
  },
  create: function(req, res){
    var race = new Race(req.body);
    race.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Race.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Race.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  // initialize
  initialize: function(){
    var raceStock = [
      {
        title:"Vesk",
        description:"Heavily muscled and covered with thick scales and short, sharp horns, the reptilian vesk are exactly as predatory and warlike as they appear. Originally hailing from a star system near the Pact Worlds, they sought to conquer and subdue their stellar neighbors, as they had all the other intelligent races in their own system, until an overwhelming threat forced them into a grudging alliance with the Pact Worlds—for now.",
        height:7,
        weight:250,
        maturity:16,
        maxAge:90,
        size:1,
        hitPoints:6,
        bonuses:[
          {stat:"strength",bonus:2,},
          {stat:"constitution",bonus:2,},
          {stat:"intelligence",bonus:-2,}
        ],
        racialTraits:[
          {trait:"Armor Savant",description:"Vesk use armor in a way that complements their uniquely sturdy physiology. When wearing armor, they gain a +1 racial bonus to AC. When they’re wearing heavy armor, their armor check penalty is 1 less severe than normal."},
          {trait:"Fearless",description:"Vesk receive a +2 racial bonus to saving throws against fear effects."},
          {trait:"Low-light Vision",description:"Vesk can see in dim light as if it were normal light. For more details, see page 264."},
          {trait:"Natural Weapons",description:"Vesk are always considered armed. They can deal 1d3 lethal damage with unarmed strikes and the attack doesn’t count as archaic. Vesk gain a unique weapon specialization with their natural weapons at 3rd level, allowing them to add 1–1/2 × their character level to their damage rolls for their natural weapons (instead of just adding their character level, as usual)."},
        ],
        playingTips:"YOU LIKELY... See most other races as weak or dishonorable and believe the vesk way is best. Relish the chance to prove your worth in combat, though only against worthy opponents. Have an ironclad sense of honor and propriety, and strive to always keep your word. Bond closely with proven comrades and surprise non-vesk friends with sudden outpourings of emotion in private. OTHER RACES PROBABLY… Find your size and bloodthirsty reputation intimidating. Assume you’re ignorant of anything beyond combat. Depend on you in battle yet fear and resent you for your empire’s past conflicts and conquests. Mistake vesk etiquette and propriety for a lack of feeling",
        homeworld:"Vesk Prime",
        languages:["Vesk","Common"],
      },
    ];
    for (var i = 0; i < raceStock.length; i++) {
      var race = new Race(raceStock[i]);
      Planet.findOne({title: raceStock[i].homeworld}, function(err, planet){
        if (err) {
          return;
        }
        race.homeworld = planet._id;
      });
      var fetchedlang = []
      for (var j = 0; j < raceStock[i].languages.length; j++) {
        Language.findOne({title: raceStock[i].languages[j]}, function(err, language){
          if (err) {
            return;
          }
          fetchedlang.push(language._id);
        });
      }
      race.languages[i] = fetchedlang;
      race.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
