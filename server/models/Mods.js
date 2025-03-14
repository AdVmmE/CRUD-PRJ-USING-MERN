const mongoose = require('mongoose');
const ModsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
});
const ModsModel =   mongoose.model('Mods',ModsSchema)//==>>(whats u wanna call it, schema(how u want it to be))
module.exports = ModsModel;//   ==>exporting the model
