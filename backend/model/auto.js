// Modulos internos
const mongoose = require('mongoose');
// Esquema
const esquemaAuto = new mongoose.Schema({
    idUsuario: String,
    nombre: String,
    marca: String,
    modelo: String,
    precio: Number,
    color: String,
    fecha:{
        type: Date,
        default: Date.now,
    }
})
// Creamos los exports
const Auto = mongoose.model('auto', esquemaAuto);
module.exports.Auto = Auto;