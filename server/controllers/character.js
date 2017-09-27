var mongoose = require('mongoose')
var Character = mongoose.model('character')
var User = mongoose.model('user')

module.exports = {
  index: function(req, res){
    Character.find({})
    .populate('alignment')
    .populate('homeworld')
    .populate('pClass')
    .populate('race')
    .populate('theme')
    .populate('equipment')
    .populate('spellsKnown')
    .populate('_user')
    .exec(function(err, data) {
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Character.findOne({_id: req.params.id})
    .populate('alignment')
    .populate('homeworld')
    .populate('pClass')
    .populate('race')
    .populate('theme')
    .populate('equipment')
    .populate('spellsKnown')
    .populate('_user')
    .exec(function(err, character) {
        if (err) {
          res.json (err);
          return;
        }
        res.json(character);
    });
  },
  create: function(req, res){
    User.findOne({_id: req.user._id}, function(err, user){
      var character = new Character(req.body);
      character._user = user._id;
      character.save(function(err){
        user.characters.push(character);
        user.save(function(err){
          if(err) {
            res.json(err);
            return;
          } else {
            res.json(data);
          }
        });
      });
    });
  },
  destroy: function(req, res) {
    Character.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Character.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
