var mongoose = require('mongoose');

var itemTypeSchema= new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    armorType:{required:true, type: mongoose.Schema.ObjectId, ref:'armorType'},
    weaponType:{required:true, type: mongoose.Schema.ObjectId, ref:'weaponType'},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('itemType', itemTypeSchema);
