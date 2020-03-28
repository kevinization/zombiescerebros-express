var mongoose = require('mongoose');

/*var modelSchema = mongoose.Schema({
    name: String,
    email: String,
    type: String
})*/

var modelSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: [4, "Nombre demasiado corto, ingresa uno de mínimo 4 letras."],
        maxlength: [12, "Nombre demasiado largo, ingresa uno de mínimo 12 letras."]
    },
    email: {
        type: String,
        required: [true, "El correo electrónico se requiere obligatoriamente"],
        unique: true
    },
    type: {
        type: String,
        enum: ["Alumno zombie", "Profesor zombie"]
    }
});

var Zombie = mongoose.model("Zombie", modelSchema)
module.exports = Zombie;