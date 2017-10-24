var mongoose = require('mongoose');

var planetSchema= new mongoose.Schema({
    title:{type:String,required:true,unique:true,},
    description:{type:String},
    diameter:{type:Number},
    mass:{type:Number},
    gravity:{type:Number},
    atmosphere:{type:String},
    day:{type:Number},
    year:{type:Number},
    location:{type:String},
    languages:[{type: mongoose.Schema.ObjectId, ref:'language'}],
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('planet', planetSchema);
