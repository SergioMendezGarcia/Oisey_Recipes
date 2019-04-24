const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const commentSchema   = new Schema({
    titulo: {
        type: String,
        required: true
    },
    userName: {
        type:String,
        required: true
    },
    userMail: {
        type: Object,
        required: true
    },
    fotoUser: {
        type: String,
        required:true
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
        required: true
    },
    chefId: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Comentario', commentSchema);