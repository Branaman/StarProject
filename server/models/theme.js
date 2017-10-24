var mongoose = require('mongoose');

var themeSchema= new mongoose.Schema({
    title:{type:String,required:true,unique:true,},
    description:{type:String},
    bonuses:[
      {stat:{type:String},bonus:{type:Number},}
    ],
    knowledge:{type:String},
    skills:[
      {skill:{type:String},bonus:{type:Boolean},}
    ],
    levelSix:{type:String},
    levelTwelve:{type:String},
    levelEighteen:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('theme', themeSchema);
