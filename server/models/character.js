var mongoose = require('mongoose');

var characterSchema= new mongoose.Schema({
    // bio
    name:{type:String},
    description:{type:String},
    level:{type:Number},
    experiencePoints:{type:Number},
    alignment:{required:true, type: mongoose.Schema.ObjectId, ref:'alignment'},
    homeworld:{required:true, type: mongoose.Schema.ObjectId, ref:'planet'},
    pClass:{required:true, type: mongoose.Schema.ObjectId, ref:'pClass'},
    race:{required:true, type: mongoose.Schema.ObjectId, ref:'race'},
    theme:{required:true, type: mongoose.Schema.ObjectId, ref:'theme'},
    _user:{required:true, type: mongoose.Schema.ObjectId, ref:'user'},
    // ability scores
    strength:{type:Number},
    dexterity:{type:Number},
    constitution:{type:Number},
    intelligence:{type:Number},
    wisdom:{type:Number},
    charisma:{type:Number},
    // belongings
    credits:{type:Number},
    equipment:[{type: mongoose.Schema.ObjectId, ref:'item'}],
    // knowledge
    feats:[{type: mongoose.Schema.ObjectId, ref:'feat'}],
    spellsKnown:[{type: mongoose.Schema.ObjectId, ref:'spell'}],
    // health and resolve
    curHitPoints:{type:Number},
    curResolvePoints:{type:Number},
    // skills
    acrobaticsPoints:{type:Number},
    athleticsPoints:{type:Number},
    bluffPoints:{type:Number},
    computersPoints:{type:Number},
    culturePoints:{type:Number},
    diplomacyPoints:{type:Number},
    disguisePoints:{type:Number},
    engineeringPoints:{type:Number},
    intimidatePoints:{type:Number},
    lifeSciencePoints:{type:Number},
    medicinePoints:{type:Number},
    mysticismPoints:{type:Number},
    perceptionPoints:{type:Number},
    physicalSciencePoints:{type:Number},
    pilotingPoints:{type:Number},
    professionPoints:{type:Number},
    senseMotivePoints:{type:Number},
    sleightOfHandPoints:{type:Number},
    stealthPoints:{type:Number},
    survivalPoints:{type:Number},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('character', characterSchema);
