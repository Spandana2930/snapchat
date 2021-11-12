const mongoose = require('mongoose');
//Created Schema as per given data.
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number },
    bday: { type: String },
})

const User = mongoose.model('User', userSchema)
module.exports = User