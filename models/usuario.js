var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [6, "Nombre demasiado corto, ingresa uno de mínimo 6 letras."],
        maxlength: [12, "El nombre está muy largo, ingresa uno de máximo 12 caracteres"]
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: [true, "El correo electrónico se requiere obligatoriamente"]
    }
})

var Usuario = mongoose.model("Usuarios", modelSchema)
module.exports = Usuario;