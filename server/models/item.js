var mongoose = require('mongoose');

var itemSchema= new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    bulk:{type:Number},
    itemType:{required:true, type: mongoose.Schema.ObjectId, ref:'itemType'},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('item', itemSchema);
