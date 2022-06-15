const mongoose = require('mongoose');

const userDetails = new mongoose.Schema( {
    name:{
        type : String
    },
    balance:{
        type : Number
    },
    address:{
        type: String
    },
    age:{
        type:Number

    },
    gender:{
        type:String,
        enum:["Male","Female","Other"]
    },
    isFreeAppUser:{
        type: Boolean,
        default:false
    }
   
}, { timestamps: true });

module.exports = mongoose.model('User', userDetails)
