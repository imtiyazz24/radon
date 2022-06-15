const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderDetails = new mongoose.Schema( {

    userId:{
        type: ObjectId,
        ref : "User"
    },
    productId:{
        type : ObjectId,
        ref : "Product"
    },
    amount:{
        type : Number
    },
    isFreeAppUser:{
        type : Boolean,
        default: true
    },
    date:{
        type: Date
    }

}, { timestamps: true });

module.exports = mongoose.model('Order', orderDetails )