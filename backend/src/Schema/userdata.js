const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  userName:{type:String,required:true},
  password:{type:String,required:true},
  place:{type:String},
  phoneNumber:{type:Number},
  month:{type:String},
  day:{type:Number},
  year:{type:Number}
})

const User=mongoose.model('User',userSchema)
module.exports=User