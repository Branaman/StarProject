var mongoose = require('mongoose');

var raceSchema= new mongoose.Schema({
    id:{type: Number},
    title:{type:String},
    description:{type:String},
    price:{type:Number},
    image:{type:String},
    location:{type:String},
    user:{type: String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('race', raceSchema);
