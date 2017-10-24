var mongoose = require('mongoose')
var Alignment = mongoose.model('alignment')

module.exports = {
  index: function(req, res){
    Alignment.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Alignment.findOne({_id:req.params.id}, function(err, alignment){
        if (err) {
          res.json (err);
          return;
        }
        res.json(alignment);
    });
  },
  create: function(req, res){
    var alignment = new Alignment(req.body);
    alignment.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Alignment.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Alignment.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  // initialize
  initialize: function(){
    var alignmentStock = [
      {
        title:"Lawful Good",
        description:"You act as a good person is expected by society to act. You’re honorable and compassionate, you keep your word, and you fight injustice in a disciplined fashion. You believe that rules and structure are necessary for a healthy society, but only if they help people do the right thing. Other alignments may see you as simplistic and as valuing ideological purity over progress",
      },
      {
        title:"Neutral Good",
        description:"You believe in doing the right thing and helping others, but you don’t bother enforcing an ideology. You have little time for selfrighteousness from either law-keepers or rebels, and you don’t care if others think of you as inconsistent or detached as long as you’re working toward the greater good.",
      },
      {
        title:"Chaotic Good",
        description:"You follow your conscience and make up your own mind. You resent anyone’s attempt to limit you, and you know that sometimes you have to break the rules to do what is right. While you generally have good intentions, people can sometimes find you difficult to work with and unpredictable",
      },
      {
        title:"Lawful Neutral",
        description:"You follow a code, and don’t willingly break it, whether that’s societal law or a personal ethos. You feel that order and organization are the only things holding society together, and while you believe in authority, you don’t confuse it with morality—the system may hurt as well as help, but it’s better than no system at all. Others may resent your inflexibility, but at least you’re dependable.",
      },
      {
        title:"Neutral",
        description:"You may hold an aloof philosophical commitment to balance and neutrality, but more likely you simply don’t hold any particular inclinations toward other alignments. You likely prefer good to evil, but don’t go out of your way to uphold it. You act in your own self-interest and may be keenly aware that the universe considers mortal beliefs to be irrelevant. Nonsentient creatures are always considered neutral, as they lack the selfawareness to make informed choices and simply act on instinct or programming.",
      },
      {
        title:"Chaotic Neutral",
        description:"You follow your whims and don’t worry about the consequences. You resent attempts to control you, and you act in your own selfinterest. You’re not committed to spreading anarchy—that would require too much conviction—and your actions aren’t random, but merely unconstrained. You don’t enjoy hurting others, but you don’t worry overmuch about protecting them. You believe in living for the moment and reinventing yourself as necessary.",
      },
      {
        title:"Lawful Evil",
        description:"You believe that a civilization supported by laws, hierarchies, and social contracts is inherently preferable to chaos. At the same time, you believe in using those rules to get what you want, regardless of whom it hurts. While you’re always thinking about how to get ahead, you’re willing to serve and rise through the ranks if necessary. You keep your word and obey the letter of the law, and you care about tradition, loyalty, and order—but not freedom, dignity, or life. While you may cite the greater good, ultimately your actions are meant to benefit only you.",
      },
      {
        title:"Neutral Evil",
        description:"You’re the embodiment of amoral self-interest. You do whatever you feel like without remorse, and have neither a fondness for order nor a need to create conflict. You lack empathy and may harm others just for the fun of it. Though you’re capable of longterm planning and working in a group, you turn on allies instantly if it is to your benefit",
      },
      {
        title:"Chaotic Evil",
        description:"You adore conflict and destruction, as it gives you the chance to show your strength. You follow your greed, hatred, and lust without restraint, making you brutal and unpredictable. You don’t really understand loyalty and would rather be feared than loved. You have an instinctive desire to smash anything that tries to restrain you.",
      },
    ];
    for (var i = 0; i < alignmentStock.length; i++) {
      var alignment = new Alignment(alignmentStock[i]);
      alignment.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
