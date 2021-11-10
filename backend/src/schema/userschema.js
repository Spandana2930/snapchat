//Importing npm modules
const mongoose = require('mongoose')

/**
 * creating a scheema of record
 * declaring required fields and specifying data type
 */

const UserSchema = new mongoose.Schema({
    user_name:{type:String,required:true}, 
    password:{type:String,required:true}, 
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    phone_number:{type:Number}
   
});
//assigning model to const variable
const User = mongoose.model("User", UserSchema);

//exporting User
module.exports = User;