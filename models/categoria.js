const { Schema, model } = require('mongoose');
const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: true

    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: String,
        required: true
    }
})

module.exports = model('Categoria', CategoriaSchema)