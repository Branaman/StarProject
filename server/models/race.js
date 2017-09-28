var mongoose = require('mongoose');

var raceSchema= new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    height:{type:Number},
    weight:{type:Number},
    maturity:{type:Number},
    maxAge:{type:Number},
    hitPoints:{type:Number},
    bonuses:[
      {stat:{type:String},bonus:{type:Number},}
    ],
    racialTraits:[
      {trait:{type:String},description:{type:String}}
    ],
    playingTips:{type:String},
    homeworld:{required:true, type: mongoose.Schema.ObjectId, ref:'planet'},
    languages:[{type: mongoose.Schema.ObjectId, ref:'language'}],
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('race', raceSchema);
