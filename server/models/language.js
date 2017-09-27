var mongoose = require('mongoose');

var languageSchema= new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    prevalent:{type:Boolean},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('language', languageSchema);
