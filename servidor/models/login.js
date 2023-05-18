const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    usuario:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Login', LoginSchema);