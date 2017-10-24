var mongoose = require('mongoose');

var proficiencySchema= new mongoose.Schema({
    title:{type:String,required:true,unique:true,},
    description:{type:String},
    armorType:{type: mongoose.Schema.ObjectId, ref:'armorType'},
    weaponType:{type: mongoose.Schema.ObjectId, ref:'weaponType'},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('proficiency', proficiencySchema);
