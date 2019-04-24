const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const chefSchema   = new Schema({
    nombre: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required:true
    },
    avatar: {
        type: String,
        required: true
    },
    especialidad: {
        type: [String],
        required: false
    },
    estrellas: {
        type: [Number],
        required: true
    },
    biografia: {
        type: String,
        required: true
    },
    galeria: {
        type: [String],
        required: false
    },
    localizacion: {
        type: Object,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    comentarios: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Chef', chefSchema);