var mongoose = require('mongoose');

var themeSchema= new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    bonus:[
      strength:{type:Number}=0,
      dexterity:{type:Number}=0,
      constitution:{type:Number}=0,
      intelligence:{type:Number}=0,
      wisdom:{type:Number}=0,
      charisma:{type:Number}=0,
    ],
    knowledge:{type:String},
    skills:[
      acrobatics:{type:Boolean}=false,
      athletics:{type:Boolean}=false,
      bluff:{type:Boolean}=false,
      computers:{type:Boolean}=false,
      culture:{type:Boolean}=false,
      diplomacy:{type:Boolean}=false,
      disguise:{type:Boolean}=false,
      engineering:{type:Boolean}=false,
      intimidate:{type:Boolean}=false,
      lifeScience:{type:Boolean}=false,
      medicine:{type:Boolean}=false,
      mysticism:{type:Boolean}=false,
      perception:{type:Boolean}=false,
      physicalScience:{type:Boolean}=false,
      piloting:{type:Boolean}=false,
      profession:{type:Boolean}=false,
      senseMotive:{type:Boolean}=false,
      sleightOfHand:{type:Boolean}=false,
      stealth:{type:Boolean}=false,
      survival:{type:Boolean}=false,
    ],
    levelSix:{type:String},
    levelTwelve:{type:String},
    levelEighteen:{type:String},
    location:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('theme', themeSchema);
