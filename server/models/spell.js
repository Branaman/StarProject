var mongoose = require('mongoose');

var spellSchema= new mongoose.Schema({
    title:{type:String,required:true,unique:true,},
    description:{type:String},
    spellSchool:{type: mongoose.Schema.ObjectId, ref:'spellSchool'},
    castingTime:{type:Number},
    range:{type:Number},
    target:{type: String},
    duration:{type:String},
    spellSave:{type:String},
    spellResist:{type:Boolean},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('spell', spellSchema);
