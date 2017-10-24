var mongoose = require('mongoose');

var itemSchema= new mongoose.Schema({
    title:{type:String,required:true,unique:true,},
    description:{type:String},
    bulk:{type:Number},
    level:{type:Number},
    price:{type:Number},
    damage:{type:String},
    critical:{type:String},
    special:{type:String},
    armorType:{type:Number},
    eAC:{type:Number},
    kAC:{type:Number},
    maxDex:{type:Number},
    armorPenalty:{type:Number},
    speedAdjust:{type:Number},
    upgradeslots:{type:Number},
    armorType:{type: mongoose.Schema.ObjectId, ref:'armorType'},
    weaponType:{type: mongoose.Schema.ObjectId, ref:'weaponType'},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('item', itemSchema);
