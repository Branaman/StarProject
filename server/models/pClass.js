var mongoose = require('mongoose');

var pClassSchema= new mongoose.Schema({
  title:{type:String,required:true,unique:true,},
  description:{type:String},
  hitPoints:{type:Number},
  staminaPoints:{type:Number},
  keyAbility:{type:Number},
  skills:[
    {skill:{type:String},bonus:{type:Boolean},}
  ],
  proficiencies:[
    {type: mongoose.Schema.ObjectId, ref:'proficiency'},
  ],
  features:[
    {feature:{type:String},level:{type:Number},sp:{type:Boolean},sp:{type:Boolean},}
  ],
  spellPerDay:{type:String},
  bAB:{type:Number},
  fortSave:{type:Number},
  refSave:{type:Number},
  willSave:{type:Number},
  fortSaveBase:{type:Number},
  refSaveBase:{type:Number},
  willSaveBase:{type:Number},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('pClass', pClassSchema);
