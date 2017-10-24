var mongoose = require('mongoose');

var spellSchoolSchema= new mongoose.Schema({
    title:{type:String,required:true,unique:true,},
    description:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('spellSchool', spellSchoolSchema);
