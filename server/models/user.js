var mongoose = require('mongoose');

var userSchema= new mongoose.Schema({
    email:{type:String, required:true,unique:true,validate:{
      validator: function(value){
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
      },
      message: "not a valid email!"
      }
    },
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    password:{select:false, type:String, required:true},
    characters: [{type: mongoose.Schema.Types.ObjectId, ref: 'character'}],
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('user', userSchema);
