const newBookModel = require('../models/newBookModel')
const newAuthorModel = require('../models/newAuthorModel')
const newPublisherModel = require('../models/newPublisherModel')

const createBookOne = async function (req, res) {
    const data = req.body
    const save = await newBookModel.create(data)
    res.send({massage:save})
}

const checkId = async function (req, res){
    const data = req.body.author
    const save = await newBookModel.find().select({author:1})
    if(save[0].author==data){
        res.send({mag:"found"})
    }else{
        res.send({msg:"not Found"})
    } 
}
const checkPubliserId = async function (req, res){
    const data = req.body.publisher
    const save = await newBookModel.find().select({publisher:1})
    if(save[0].publisher==data){
      res.send({msg:"found publisher Id"})
    }else{
        res.send({msg:"not found publisher Id"})
    }
}





const getBookOne = async function(req, res){
    const data = await newBookModel.find().populate('author').populate('publisher')
    res.send({msg:data})
    

}
const updatePrice= async function(req, res){
    const data = await newBookModel.find({ rating: {$gt:3}})
    for (let i=0;i<=data.length;i++){
       newBookModel.findOneAndUpdate({i:{rating+=10}})
    }
    res.send({massage:"update"})
}



module.exports.createBookOne=createBookOne
module.exports.checkId=checkId
module.exports.checkPubliserId=checkPubliserId
module.exports.getBookOne=getBookOne
module.exports.updatePrice=updatePrice
