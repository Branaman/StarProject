var mongoose = require('mongoose');

var featSchema= new mongoose.Schema({
    title:{type:String,required:true,unique:true,},
    description:{type:String},
    prerequisites:[{type: mongoose.Schema.ObjectId, ref:'feat'}],
    combat:{type:Boolean},
    special:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('feat', featSchema);
