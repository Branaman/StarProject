var mongoose = require('mongoose');

var weaponTypeSchema= new mongoose.Schema({
    key:{type:Number,unique:true, required:true},
    title:{type:String},
    description:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('weaponType', weaponTypeSchema);
