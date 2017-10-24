var mongoose = require('mongoose');

var armorTypeSchema= new mongoose.Schema({
    key:{type:Number,unique:true, required:true},
    title:{type:String,required:true,unique:true,},
    description:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('armorType', armorTypeSchema);
