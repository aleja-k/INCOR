const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    tpoidentificacion:{
        type: String,
        required: true,
        maxlength: 50,
    },
    identificacion:{
        type: Number,
        required: true,
        maxlength: 10,
    },
    nombre:{
        type: String,
        required: true,
        maxlength: 50
    },
    segundonombre:{
        type: String,
        required: false,
        maxlength: 50
    },
    primerapellido:{
        type: String,
        required: true,
        maxlength: 50
    },
    segundoapellido:{
        type: String,
        required: false,
        maxlength: 50
    },
    telefono:{
        type: Number,
        required: true,
        maxlength: 10
    },
    genero:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        maxlength: 50
    },
    grupoSanguineo:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true,
        maxlength: 50
    },
    estado:{
        type: String,
        required: true
    },
    archivoPDF:{
        type:String, 
        required: false
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
   
});

module.exports = mongoose.model('Producto', ProductoSchema);