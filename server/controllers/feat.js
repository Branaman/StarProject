var mongoose = require('mongoose')
var Feat = mongoose.model('feat')

module.exports = {
  index: function(req, res){
    Feat.find({})
    .populate('prerequisites')
    .exec(function(err, data) {
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Feat.findOne({_id:req.params.id})
    .populate('prerequisites')
    .exec(function(err, data) {
        if (err) {
          res.json (err);
          return;
        }
        res.json(feat);
    });
  },
  create: function(req, res){
    var feat = new Feat(req.body);
    feat.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Feat.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Feat.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  // initialize
  initialize: function(){
    var featStock = [
      {
        title:"Punching Mastery",
        description:"Punch things real good. +20d20 to dmg when punching groins.",
        prerequisites:[{type: mongoose.Schema.ObjectId, ref:'feat'}],
        combat:true,
      },
      {
        title:"Punching Mastery 2",
        description:"Punch things real gooder. +200d20 to dmg when punching pineapples.",
        prerequisites:["Punching Mastery"],
        combat:true,
        special:"Punching is now how you talk",
      },
      {
        title:"Punching Mastery 3",
        description:"Punching objects now forms darkmatter.",
        prerequisites:["Punching Mastery", "Punching Mastery 2"],
        combat:true,
        special:"+20 to punching checks",
      },
    ];
    for (var i = 0; i < featStock.length; i++) {
      var feat = new Feat(featStock[i]);
      if (featStock[i].prerequisites) {
        var preReqs = []
        for (var j = 0; j < featStock[i].prerequisites.length; j++) {
          Feat.findOne({title: featStock[i].prerequisites[j]}, function(err, feat){
            if (err) {
              return;
            }
            preReqs.push(feat._id);
          });
        }
        feat.prerequisites[i] = preReqs;
      }
      feat.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
