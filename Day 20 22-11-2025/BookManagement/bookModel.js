const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        trim: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    publishedDate: { 
        type: Date, 
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);