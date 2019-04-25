const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const commentSchema   = new Schema({
    titulo: {
        type: String,
        required: false
    },
    userName: {
        type:String,
        required: false
    },
    userMail: {
        type: String,
        required: false
    },
    fotoUser: {
        type: String,
        required:false
    },
    puntuacion: {
        type: Number,
        required: true
    },
    commentText: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: false
    },
    chefId: {
        type:String,
        required: false
    }
});

module.exports = mongoose.model('Comentario', commentSchema);