const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const UserSchema   = new Schema({
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
    biografia: {
        type: String,
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
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);