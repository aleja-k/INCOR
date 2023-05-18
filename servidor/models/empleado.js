const mongoose = require('mongoose');

const EmpleadoSchema = mongoose.Schema({
    valorKilo:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    kilos:{
        type: Number,
        required: true
    },
    descuentos:{
        type: Number,
        required: true
    },
    pago:{
        type: Number,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);