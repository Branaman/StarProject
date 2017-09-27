var mongoose = require('mongoose');

var itemTypeSchema= new mongoose.Schema({
    title:{type:String},
    description:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('itemType', itemTypeSchema);
