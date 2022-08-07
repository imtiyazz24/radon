const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({


    title: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true
    }, //valid number/decimal

    currencyId: {
        type: String,
        required: true
    }, //INR  

    currencyFormat: {
        type: String,
        required: true
    }, // Rupee symbol,

    isFreeShipping: {
        type: Boolean,
        default: false
    },

    productImage: {
        type: String,
        required: true
    }, // s3 link

    style: { 
        type: String,
        trim: true },

    availableSizes: {
        type: [String],
        trime: true,
        enum: ["S", "XS", "M", "X", "L", "XXL", "XL"]
    },

    installments: Number,

    deletedAt: Date,
       
    isDeleted: {
        type: Boolean,
        default: false
    },

}, { timestamps: true });


module.exports = mongoose.model("Product", productSchema);