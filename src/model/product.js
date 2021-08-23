const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
    id: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        validate(value){
            if(value.length > 250){
                throw new Error('No se puede ingresar un nombre con mas de 250 caracteres')
            }
        }
    },
    description: {
        type: String,
        required: true
    },
    info: {
        type: String
    },
    size: {
        type: String
    },
    date: {
        type: Number,
        required: true
    },
    destacado: {
        type: Boolean,
        required: true
    },
    imageHome: {
        type: String,
    },
    imageSumario: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    }
});

module.exports = Product;