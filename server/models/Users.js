const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
});
const UserModel =   mongoose.model('Users',UserSchema)//==>>(whats u wanna call it, schema(how u want it to be))
module.exports = UserModel;//   ==>exporting the model
