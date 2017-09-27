var mongoose = require('mongoose');

var featSchema= new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    prequisites:[{type: mongoose.Schema.ObjectId, ref:'feat'}],
    combat:{type:Boolean},
    special:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('feat', featSchema);
