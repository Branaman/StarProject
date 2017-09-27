var mongoose = require('mongoose');

var alignmentSchema= new mongoose.Schema({
    title:{type:String},
    description:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('alignment', alignmentSchema);
