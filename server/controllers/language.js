var mongoose = require('mongoose')
var Language = mongoose.model('language')

module.exports = {
  index: function(req, res){
    Language.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Language.findOne({_id:req.params.id}, function(err, data){
        if (err) {
          res.json (err);
          return;
        }
        res.json(data);
    });
  },
  create: function(req, res){
    var language = new Language(req.body);
    language.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Language.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Language.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  // initialize
  initialize: function(){
    var languageStock = [
      {
        title:"Vesk",
        description:"Common, the most prevalent trade tongue of the Pact Worlds, is believed to be based on one or more of the old human languages of Golarion.",
        prevalent:true,
      },
      {
        title:"Common",
        description:"Spoken by vesk and the inhabitants of the Veskarium",
        prevalent:true,
      },
    ];
    for (var i = 0; i < languageStock.length; i++) {
      var language = new Language(languageStock[i]);
      language.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
