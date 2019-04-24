const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const recipeSchema   = new Schema({
    nombre: {
        type: String,
        required: true
    },
    ingr: {
        type: String,
        required: true
    },
    tiempo: {
        type: Number,
        required:true
    },
    fotos: {
        type: [String],
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        required: true
    },
    chefId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);