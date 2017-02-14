const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/example-db');

let userSchema = new Schema({
    nombre: String,
    apellidos: String,
    telefono: Number
});

let User = mongoose.model("User", userSchema);

module.exports = User;
