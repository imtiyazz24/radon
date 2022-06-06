const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String,
    prices: {
        indianPrice: String,
        europePrice: String,
    }, 
    year : Number,
    tags: [String],
    totalPages : Number,
    stockAvailable: Boolean,
}, { timestamps: true });


module.exports = mongoose.model('Stock', bookSchema)
