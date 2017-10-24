var mongoose = require('mongoose')
var Theme = mongoose.model('theme')

module.exports = {
  index: function(req, res){
    Theme.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    Theme.findOne({_id:req.params.id}, function(err, theme){
        if (err) {
          res.json (err);
          return;
        }
        res.json(theme);
    });
  },
  create: function(req, res){
    var theme = new Theme(req.body);
    theme.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Theme.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Theme.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  // initialize
  initialize: function(){
    var themeStock = [
      {
        title:'Ace Pilot',
        description:'You are most comfortable at the controls of a vehicle, whether its a starship racing through the inky void of space or a ground vehicle zooming between trees, around boulders, and across dusty badlands. You might be a member of an elite military force, the recipient of intense courses of training. Alternatively, you might be a total amateur with innate skills that make you a much-admired hotshot.',
        bonuses:[
          {stat:'dexterity',bonus:1,}
        ],
        knowledge:'You are obsessed with starships and vehicles, and have committed to memory almost every related tidbit of knowledge youve ever come across. Reduce the DC of Culture checks to recall knowledge about starship and vehicle models and parts as well as famous hotshot pilots by 5. Piloting is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to your Piloting checks. In addition, you gain an ability adjustment of +1 to Dexterity at character creation.',
        skills:[
          {skill:'piloting',bonus:true,}
        ],
        levelSix:'Lone Wolf: You know at least a little bit about handling every role on a starship, and you can sub in for certain tasks in a pinch. Whenever you need to attempt a skill check either during starship combat or to directly repair or otherwise maintain your starship, you can treat half your ranks in Piloting as your ranks in the appropriate skill for the check, if that would be better (since you effectively have ranks in the related skill, you are considered trained in the skill for the purposes of this check).',
        levelTwelve:'Need For Speed: Speeding in a vehicle gives you a heady rush, and you can easily handle operating vehicles at high velocities that might send lesser pilots spinning out of control. Reduce any penalties to Piloting checks you make when on a vehicle by 1. When you take the double maneuver action during a vehicle chase (see page 283), reduce the penalty for each action by 1. Whenever a Piloting check has a penalty for failing by 5 or more, you take that penalty only if you fail by 10 or more.',
        levelEighteen:'Master Pilot: Your piloting accomplishments invigorate you, giving you renewed purpose and zeal. Up to twice per day, when you defeat a significant foe in starship combat as a pilot or succeed in a vehicle chase (meaning that you’ve either escaped a pursuer or caught or defeated your opponent), you recover 1 Resolve Point.',
      },
      {
        title:'Bounty Hunter',
        description:'You track people down for money. It is a dangerous profession, as most of your targets understandably don’t wish to be caught. You wouldn’t have it any other way. You might have a code of ethics, never taking jobs that, say, target children or members of your own race. You might hunt down only escaped criminals. Or you might be completely amoral, taking any job that comes along—for the right price.',
        bonuses:[
          {stat:'constitution',bonus:1,}
        ],
        knowledge:"Your mind is a cold steel trap when it comes to scraps of information about the creatures youre tracking down. Choose a specific sentient creature that you can identify by name, alias, or specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and practices, by 5. If you choose a mark that is known only by an alias or secret identity this ability helps you learn facts only about the identity you know about, not any other unknown identities. Once you defeat your mark, as an action that takes 1 minute, you can study dossiers and database information about another individual to be your new mark. You can instead abandon your mark for a new one without defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution at character creation.",
        skills:[
          {skill:'survival',bonus:true,}
        ],
        levelSix:'Swift Hunter: You know just how to ask around about your marks to gain information and insight in a hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, and you reduce the penalty for following tracks using Survival while moving at full speed to 0',
        levelTwelve:'Relentless: You never seem to get tired, even when working longer and harder than everyone else in pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt Constitution checks for a forced march (see page 258), and you can hustle for 2 hours a day during overland travel (see page 258) instead of 1 hour. Reduce the penalty for following tracks using Survival while moving at double speed to –10.',
        levelEighteen:'Master Hunter: Your relentless pursuit of your mark steels your determination and can renew your inner reserves of strength. Once per day while in pursuit of your mark, you can review current information about your mark for 10 minutes to regain 1 Resolve Point; this doesn’t count as resting to regain Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.',
      },
      {
        title:'Icon',
        description:'Thanks to interstellar transmissions and Drift travel, the galaxy is smaller than ever, and this connectivity has facilitated your ascension to celebrity status. You might be a famous performer or a celebrated scientist, but either way, you get recognized on the Pact Worlds and in associated systems. Your reason for traveling to unknown worlds might be to further spread your acclaim or to escape the limelight.',
        bonuses:[
          {stat:'charisma',bonus:1,}
        ],
        knowledge:"Choose a Profession skill. You are hooked deeply into the culture of your iconic profession. When attempting a Profession or Culture check to recall knowledge about other icons of your profession or details about your profession’s cultural aspects, increase the DC by 5. You gain a +1 bonus to checks with your chosen Profession skill. Culture also becomes a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Culture checks. In addition, you gain an ability adjustment of +1 to Charisma at character creation.",
        skills:[
          {skill:'culture',bonus:true,}
        ],
        levelSix:'Celebrity: You are famous enough that pretty much everyone has either heard of you or can quickly find information about you (it’s a DC 10 Culture check to recognize your name and a DC 20 Culture check for someone to recognize you out of context from your appearance alone). Among those who follow your iconic profession, you’ve built up both fans and detractors due to your celebrity. If you’re looking for a generic person like “a doctor who can treat this disease,” you can almost always find one who’s a fan and whose attitude starts as friendly or helpful to you; this takes 2d4 hours. At the GM’s discretion, fans might give you services (although not goods) for a discount or even for free. ',
        levelTwelve:'Megacelebrity: Your reputation grows to the point that your name is ubiquitous. The DC of Culture checks to recognize you is reduced to 5 (or 10 to recognize you out of context from your appearance alone) and it takes only 1d4 hours to find a fan who meets a generic description. In addition, fans give you a 10% discount on purchased goods.',
        levelEighteen:'Master Icon: Up to twice per day, you can interact with the public about your profession (usually during a performance, such as a concert, but sometimes in a press conference afterward if your profession requires no audience) for a total of at least 10 minutes to recover 1 Resolve Point.',
      },
      {
        title:'Mercenary',
        description:'stock',
        bonuses:[
          {stat:'strength',bonus:1,}
        ],
        knowledge:"Whether you take jobs that match your ethical beliefs or you fight for anyone who can afford your services, you are a hired gun. You might take pride in your past accomplishments, proudly displaying trophies of your kills, or you might be laden with guilt over being the sole survivor of a mission gone terribly wrong. You most likely work with other mercenaries and are familiar with the methodologies of military actions all across the galaxy.",
        skills:[
          {skill:'athletics',bonus:true,}
        ],
        levelSix:'Grunt: You’re used to long marches while carrying heavy equipment and can hoist most machinery with ease. Treat your Strength as 1 higher for the purpose of determining your bulk limit (see page 167).',
        levelTwelve:'Squad Leader: You are extremely skilled at coordinating with your squad, both because of your tactical efficiency and because of the respect that you command. If you are able to attempt the check in question, you automatically succeed at a skill check to aid another (see page 133) when assisting a squad member or other longtime ally (such as a fellow PC).',
        levelEighteen:'Commander: You pull determination from your victories with your squad, no matter how bloody. After participating in at least three combats in a day in which you defeat distinct groups of significant foes, you recover 1 Resolve Point. After participating in six such combats in a day, you recover a second Resolve Point',
      },
      {
        title:'Outlaw',
        description:'Due to the sins of your past or your current unlawful behavior, you are a wanted individual somewhere in the Pact Worlds. You might not even be guilty and are striving to clear your good name. Or you might fully admit to being a criminal but believe the laws you break are unjust. Whatever the case, boarding a starship headed to the Vast might be just the thing you need until the heat dies down—or until you’re dragged off to prison.',
        bonuses:[
          {stat:'dexterity',bonus:1,}
        ],
        knowledge:"You are well connected to shadowy secrets and back-alley deals, and you both know about key players and have handy skills of your own. Reduce the DC of Culture checks to recall knowledge about the criminal underworld by 5. Sleight of Hand is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Sleight of Hand checks. In addition, you gain an ability adjustment of +1 to Dexterity at character creation.",
        skills:[
          {skill:'sleight of hand',bonus:true,}
        ],
        levelSix:'Legal Corruption: Your underworld contacts have serious pull with the corporations and the authorities and can get you out of just about any legal trouble—as long as you’re willing to pay the right price. Depending on the severity of the crime, this can be anywhere between 500 credits × your character level and 10,000 credits × your character level',
        levelTwelve:'Black Market Connections: You have contacts who can move goods of all manner discreetly and quietly just about anywhere to nearly any destination you can imagine. You can sell goods in any city for their usual price, even if the goods are illegal or too luxurious for the locals to afford. Additionally, for 10% more than the usual price, you can purchase goods to be delivered to a remote drop-off point (possibly near an adventure location) in the same solar system as a familiar city. The delivery always takes at least as long as the journey between the city and the drop-off point—and usually longer.',
        levelEighteen:'Master Outlaw: Organizing shady plans is one of your specialties, and doing so is like a sweet shot of adrenaline. Up to twice per day, after you spend at least 10 minutes to plan a significant heist, caper, or other crime (this doesn’t count as resting to regain Stamina Points) and successfully complete at least one action toward enacting that plan, you regain 1 Resolve Point',
      },
      {
        title:'Priest',
        description:'You are a member of an organized religion or similar association. Your belief, whether it has been a part of you since childhood or it came to you later in life, is an integral part of your character. You might travel the stars proselytizing your deity, or your church might have sent you out on a specific holy (or unholy) mission. No matter what obstacles life puts in your way, you always have the conviction of your beliefs to fall back on.',
        bonuses:[
          {stat:'wisdom',bonus:1,}
        ],
        knowledge:"Choose a deity or a philosophy whose alignment is within one step (on either the good-evil axis or the law-chaos axis) of your own. Reduce the DC of Culture and Mysticism checks to recall knowledge about religious traditions, religious symbols, and famous religious leaders by 5. Mysticism becomes a class skill for you, though if it’s a class skill from the class you take at 1st level, you instead gain a +1 bonus to Mysticism checks. In addition, you gain an ability adjustment of +1 to Wisdom at character creation. ",
        skills:[
          {skill:'mysticism',bonus:true,}
        ],
        levelSix:'Mantle of the Clergy: You have reached a rank of authority in your religion. Typical lay followers of your religion have a starting attitude of helpful toward you and will often provide you with simple assistance on request due to some combination of adoration, respect, or fear (depending on your religion), and even other clergy must give your opinions due consideration in matters of disagreement. You gain a +2 bonus to Diplomacy and Intimidate checks against lay followers and lowerranking clergy',
        levelTwelve:'Divine Boon: Your deity grants you mystic power. Choose one 1stlevel mystic spell with some connection to your deity’s portfolio (subject to the GM’s approval). If you have levels in the mystic class, you gain 1 additional 1stlevel spell per day and add the chosen spell to your list of mystic spells known. Otherwise, you can use the chosen spell once per day as a spell-like ability',
        levelEighteen:'True Communion: Up to twice per day, after performing a significant action strongly aligned with your faith’s dogma (at the GM’s discretion), you can spend 10 minutes in deep meditation or prayer to regain 1 Resolve Point; this doesn’t count as resting to regain Stamina Points.',
      },
      {
        title:'Scholar',
        description:'You are an erudite intellectual, pitting your brain against problems and puzzles that others would find daunting. You might be an instructor of a specific topic at a large university or a dabbler in a number of fields of study. You could be exploring the galaxy in search of ancient artifacts or new scientific phenomena. Whatever your motivation, you are sure that the answers you seek are out there.',
        bonuses:[
          {stat:'intelligence',bonus:1,}
        ],
        knowledge:"You are an expert in one particular field of study, and your passion for the subject shows. Choose either Life Science or Physical Science and then choose a field of specialization. If you pick Life Science, you can specialize in bioengineering, biology, botany, ecology, genetics, xenobiology, zoology, or another field of biological science. If you pick Physical Science, you can specialize in astronomy, chemistry, climatology, geography, geology, meteorology, oceanography, physics, or another field of physical science. The DC of skill checks to recall knowledge about your specialty is reduced by 5. Your chosen skill is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to checks with your chosen skill. In addition, you gain an ability adjustment of +1 to Intelligence at character creation.",
        skills:[
          {skill:'scholar science',bonus:true,}
        ],
        levelSix:'Tip of the Tongue: Sometimes, after pausing to collect your thoughts, you realize that you know the answer to a particularly challenging question. Once per day, you can reroll any skill check (see page 243) to recall knowledge. You must decide to use this ability after rolling but before learning the information from your first roll. You must take the second result, even if it is worse.',
        levelTwelve:'Research Maven: You can research much faster than most other people, allowing you to collate information from databases, libraries, and other sources in one-quarter the normal time; with this ability, you can typically take 20 to recall knowledge in 5 rounds',
        levelEighteen:'Master Scholar: To you, learning and absorbing knowledge related to your field of expertise is as refreshing as drinking from a cool spring in the middle of a desert planet. Up to twice per day, when in a situation where information from your specialty field could be useful (at the GM’s discretion), you can spend 10 minutes in deep contemplation and research of your specialty field and recover 1 Resolve Point, in addition to using recall knowledge (see page 133) for the information you seek; this doesn’t count as resting to regain Stamina Points.',
      },
      {
        title:'Spacefarer',
        description:'Your longing to journey among the stars can’t be sated. You yearn for the adventure of stepping onto a distant world and exploring its secrets. You tend to greet every new opportunity with bravery and fortitude, confident that your multitude of skills will pull you through. Perhaps you simply find joy in the act of traveling with your companions, or perhaps you are just out to line your pockets with all sorts of alien loot!',
        bonuses:[
          {stat:'constitution',bonus:1,}
        ],
        knowledge:"You are obsessed with distant worlds, and you always mentally catalog everything you learn about new and strange places so you can recall it when you need it most. Additionally, you use your knowledge of biology and topology to inure yourself to alien hazards. Reduce the DC of Physical Science checks to recall knowledge about strange new worlds or features of space by 5. Physical Science is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Physical Science checks. In addition, you gain an ability adjustment of +1 to Constitution at character creation.",
        skills:[
          {skill:'physical science',bonus:true,}
        ],
        levelSix:'Eager Dabbler: In your journeys, you’ve picked up quite a few tricks about all sorts of things, even if you haven’t formally studied them, and you can often use this logic and intuition to your advantage. You gain a +2 bonus to skill checks if you don’t have any ranks in that skill. This ability does not allow you to attempt checks for trained-only skills (see page 134).',
        levelTwelve:'Jack of All Trades: You can do just about anything if you put your mind to it, and you never let lack of formal instruction stand between you and a task that needs handling. You can use all skills untrained, even if you could not normally do so, and when you roll a natural 20 while attempting a skill check for a skill in which you don’t have ranks, your bonus from eager dabbler increases to +4.',
        levelEighteen:'Master Explorer: Scientifically noting the even tiniest details about a new place—including everything from apparent colors and incline grades to barometric, seismic, and other delicate readings—is absolutely invigorating to you. Up to twice per day while on an unexplored planet (typically one that has had no contact with the Pact Worlds, though it doesn’t need to be one you discovered yourself), you can spend 10 minutes exploring, mapping, and documenting a new geographical feature to recover 1 Resolve Point; this doesn’t count as resting to regain Stamina Points.',
      },
      {
        title:'Xenoseeker',
        description:'The thought of meeting alien life-forms excites you. The more different their appearances and customs are from yours, the better! You either believe they have much to teach you or you want to prove you are better than them. Of course, the only way to accomplish your goal is to leave the Pact Worlds and travel to the Vast, where a virtually endless number of aliens await.',
        bonuses:[
          {stat:'charisma',bonus:1,}
        ],
        knowledge:"You are trained to seek out, identify, and interact with alien life-forms. Reduce the DC to identify a rare creature using Life Science by 5. Life Science is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Life Science checks. In addition, you gain an ability adjustment of +1 to Charisma at character creation",
        skills:[
          {skill:'life science',bonus:true,}
        ],
        levelSix:'Quick Pidgin: If you don’t share a language with creatures you encounter, you and the creatures can spend 10 minutes attempting to converse (if they are willing), after which you attempt a DC 25 Culture check. If you succeed, you formulate a simple pidgin language that allows basic communication. You can use the pidgin language with those specific creatures only, but you gain a +2 bonus to Culture checks to create a pidgin language with similar creatures that speak the same language.',
        levelTwelve:'First Contact: You know how to make a good first impression on new races and assuage their fears of the unknown. When meeting a creature that has never seen your race or any of the races of your traveling companions, if it would normally be unfriendly to unknown races, treat it as indifferent instead. This has no effect if the creature would be hostile, indifferent, friendly, or helpful.',
        levelEighteen:'Brilliant Discovery: Up to twice per day, when you discover and document a new species of flora or fauna, you recover 1 RP. On an unexplored planet where every species is new, this process usually takes 10 minutes at most (and doesn’t count as rest to regain SP, but even on known planets, you might be able to find a new species in 1d4 hours (or fewer) in a remote biome or one with a high variety of wildlife',
      },
    ];
    for (var i = 0; i < themeStock.length; i++) {
      var theme = new Theme(themeStock[i]);
      theme.save(function (err, data){
        if (err) {
          return;
        }
      });
    }
  },
}
