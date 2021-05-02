const { Schema, model } = require('mongoose');
const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Escriba el nombre'],
        unique: true,
    },
    disponibilidad: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: String,
        required: true

    },
    precio: {
        type: Number,
        default: 0

    },
    categoria: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }

})

module.exports = model('Producto', ProductoSchema)