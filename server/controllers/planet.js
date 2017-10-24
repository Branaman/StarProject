var mongoose = require('mongoose')
var Planet = mongoose.model('planet')
var Language = mongoose.model('language')

module.exports = {
  index: function(req, res){
    Planet.find({})
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
    Planet.findOne({_id:req.params.id})
    .populate('languages')
    .exec(function(err, data) {
        if (err) {
          res.json (err);
          return;
        }
        res.json(planet);
    });
  },
  create: function(req, res){
    var planet = new Planet(req.body);
    planet.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Planet.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Planet.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  // initialize
  initialize: function(){
    var planetStock = [
      {
        title:"Vesk Prime",
        description:{type:String},
        diameter:5,
        mass:5,
        gravity:1,
        atmosphere:"Normal",
        day:28,
        year:3,
        location:"Near Space: The Veskarium",
        languages:["Vesk", "Common"],
      },
    ];
    for (var i = 0; i < planetStock.length; i++) {
      var planet = new Planet(planetStock[i]);
      var fetchedlang = []
      for (var j = 0; j < planetStock[i].languages.length; j++) {
        console.log(planetStock[i].languages[j]);
        Language.findOne({title: planetStock[i].languages[j]}, function(err, language){
          console.log(language);
          if (err) {
            return;
          }
          fetchedlang.push(language._id);
        });
      }
      planet.languages[i] = fetchedlang;
      planet.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
