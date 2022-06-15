const mongoose = require('mongoose');

const productDetails = new mongoose.Schema( {
    name:{
        type: String
    },
	category:{
        type:String
    },
	price:{
        type : Number,
        required :true
    }


}, { timestamps: true });

module.exports = mongoose.model('Product', productDetails )